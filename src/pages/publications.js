import React, { useRef, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
const { colors, fonts, fontSizes } = theme;

const StyledMainContainer = styled(Main)`
  max-width: 1100px;
`;

const StyledBackLink = styled.span`
  display: inline-block;
  margin-bottom: 30px;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  .arrow {
    margin-right: 10px;
  }
  a {
    ${mixins.inlineLink};
    color: ${colors.green};
  }
`;

const StyledHeader = styled.header`
  margin-bottom: 40px;
  padding-top: 20px;
`;

const StyledPageTitle = styled.h1`
  font-size: clamp(20px, 3vw, 32px);
  font-weight: 700;
  color: ${colors.lightestSlate};
  margin: 0;
`;

const StyledPubItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  padding: 12px 14px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.white};
  transition: ${theme.transition};

  &:hover {
    border-color: ${colors.green};
  }

  ${media.tablet`
    flex-direction: column;
    gap: 12px;
  `};
`;

const StyledThumb = styled.div`
  width: 100px;
  aspect-ratio: 1 / 1;
  align-self: flex-start;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  background-color: #f5f5f5;

  ${media.tablet`
    width: 100%;
    aspect-ratio: 16 / 9;
  `};
`;

const StyledThumbImg = styled(Img)`
  width: 100% !important;
  height: 100% !important;

  & > div,
  & > picture,
  & > picture > img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
  }
`;

const StyledContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const StyledTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 2px;
  line-height: 1.2;

  a {
    color: inherit;
    text-decoration: none;
    transition: ${theme.transition};
    &:hover {
      color: ${colors.green};
    }
  }
`;

const StyledAuthors = styled.div`
  font-size: 15px;
  color: #555;
  margin-bottom: 0px;
  u {
    text-decoration: underline;
  }
`;

const StyledVenueRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 0px;
`;

const StyledVenueName = styled.span`
  font-size: 15px;
  color: #666;
  font-style: italic;
`;

const StyledLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1px;
`;

const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 3px;
  border: 1px solid #aaa;
  border-radius: 3px;
  background-color: transparent;
  color: #888;
  font-family: ${fonts.SFMono};
  font-size: 10px;
  font-weight: 700;
  text-decoration: none;
  transition: ${theme.transition};
  min-width: 40px;
  text-align: center;
  margin-right: 7px;
  margin-bottom: 2px;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};
    transform: translateY(-1px);
  }
`;

const StyledLinkBtn = styled.a`
  ${buttonStyles}
`;
const StyledInternalLinkBtn = styled(Link)`
  ${buttonStyles}
`;

const PublicationsPage = ({ location, data }) => {
  const pubs = data.allMarkdownRemark.edges;

  const revealTitle = useRef(null);
  const revealItems = useRef([]);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealTitle.current, srConfig());
      revealItems.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 50)));
    }
  }, []);

  const stripHtml = html => html.replace(/<[^>]*>/g, '');

  return (
    <Layout location={location}>
      <Helmet>
        <title>Publications | Rong Huang</title>
        <meta name="description" content="All publications by Rong Huang" />
      </Helmet>

      <StyledMainContainer>
        <StyledBackLink>
          <span className="arrow">&larr;</span>
          <Link to="/#projects">Back</Link>
        </StyledBackLink>

        <StyledHeader ref={revealTitle}>
          <StyledPageTitle>Rong Huang</StyledPageTitle>
        </StyledHeader>

        {pubs.map(({ node }, i) => {
          const { title, type, author, pdf, video, github, external, slug, cover } =
            node.frontmatter;

          const hasLinks = slug || pdf || video || github || (external && !pdf);

          return (
            <StyledPubItem key={i} ref={el => (revealItems.current[i] = el)}>
              {cover && cover.childImageSharp && cover.childImageSharp.fluid ? (
                <StyledThumb>
                  <StyledThumbImg fluid={cover.childImageSharp.fluid} alt={title} />
                </StyledThumb>
              ) : (
                <StyledThumb />
              )}

              <StyledContent>
                <StyledTitle>{title}</StyledTitle>

                {author && <StyledAuthors dangerouslySetInnerHTML={{ __html: author }} />}

                {type && (
                  <StyledVenueRow>
                    <StyledVenueName>{stripHtml(type)}</StyledVenueName>
                  </StyledVenueRow>
                )}

                {hasLinks && (
                  <StyledLinks>
                    {pdf && (
                      <StyledLinkBtn href={pdf} target="_blank" rel="nofollow noopener noreferrer">
                        Paper
                      </StyledLinkBtn>
                    )}
                    {video && (
                      <StyledLinkBtn
                        href={video}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Video
                      </StyledLinkBtn>
                    )}
                    {github && (
                      <StyledLinkBtn
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Code
                      </StyledLinkBtn>
                    )}
                    {external && !pdf && (
                      <StyledLinkBtn
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Link
                      </StyledLinkBtn>
                    )}
                  </StyledLinks>
                )}
              </StyledContent>
            </StyledPubItem>
          );
        })}
      </StyledMainContainer>
    </Layout>
  );
};

PublicationsPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default PublicationsPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            type
            venue_short
            author
            pdf
            video
            github
            external
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 320, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
