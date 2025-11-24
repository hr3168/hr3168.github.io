import React, { useEffect, useRef } from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Layout } from '@components';
import styled from 'styled-components';
import { Main, theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledProjectContainer = styled(Main)`
  max-width: 1200px;
`;

const StyledProjectHeader = styled.header`
  margin-bottom: 40px;
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

const StyledLabel = styled.h4`
  font-size: ${fontSizes.smish};
  font-weight: normal;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  margin: 10px 0;
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  margin: 20px 0;
  color: ${colors.lightestSlate};

  ${media.tablet`font-size: 32px;`};
  ${media.phone`font-size: 28px;`};
`;

const StyledAuthor = styled.div`
  font-size: 18px;
  color: ${colors.slate};
  margin-bottom: 20px;
  font-style: italic;
`;

const StyledCoverImage = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 40px;
  border-radius: ${theme.borderRadius};
  overflow: hidden;
  ${mixins.boxShadow};

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const StyledTechList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    font-family: inherit;
    font-size: ${fontSizes.sm};
    color: #2a2a2a;
    background-color: ${colors.transGreen};
    padding: 3px 8px 2px;
    margin-right: 8px;
    margin-bottom: 6px;
    border-radius: 3px;
    white-space: nowrap;
    border: 0px solid rgba(100, 255, 218, 0.3);

    &:not(:last-child)::after {
      content: '';
    }
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0;
`;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: 2px solid ${colors.green};
  border-radius: ${theme.borderRadius};
  background-color: transparent;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: ${theme.transition};

  &:hover {
    background-color: ${colors.green};
    color: ${colors.navy};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(100, 255, 218, 0.3);
  }
`;

const StyledProjectContent = styled.div`
  margin-bottom: 100px;

  h2 {
    font-size: 28px;
    color: ${colors.lightestSlate};
    margin: 40px 0 20px;

    ${media.tablet`font-size: 24px;`};
  }

  h3 {
    font-size: 22px;
    color: ${colors.lightestSlate};
    margin: 30px 0 15px;

    ${media.tablet`font-size: 20px;`};
  }

  p {
    margin: 1em 0;
    line-height: 1.7;
    color: ${colors.slate};
    font-size: ${fontSizes.lg};
  }

  ul,
  ol {
    margin: 1em 0;
    padding-left: 30px;
    color: ${colors.slate};
  }

  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }

  strong,
  b {
    color: ${colors.lightSlate};
    font-weight: 600;
  }

  em,
  i {
    color: ${colors.slate};
  }

  code {
    background-color: ${colors.lightestNavy};
    color: ${colors.lightestSlate};
    padding: 3px 6px;
    border-radius: 3px;
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.sm};
  }

  a {
    ${mixins.inlineLink};
  }

  img {
    width: 100%;
    max-width: 100%;
    margin: 20px 0;
    border-radius: ${theme.borderRadius};
  }

  blockquote {
    border-left: 3px solid ${colors.green};
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    color: ${colors.slate};
  }
`;

const StyledSection = styled.section`
  margin-bottom: 40px;
  padding: 10px 40px;
  background-color: #ffffff;
  border-radius: ${theme.borderRadius};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
  }

  .section-title {
    font-size: 28px;
    color: ${colors.green};
    margin-bottom: 12px;
    font-weight: 600;

    ${media.tablet`font-size: 24px;`};
    ${media.phone`font-size: 22px;`};
  }

  .subsection-title {
    font-size: 18px;
    color: #1a1a1a;
    margin-top: 16px;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .section-content {
    color: #1a1a1a;
    font-size: ${fontSizes.lg};
    line-height: 1.45;
    text-align: justify;

    p {
      margin: 8px 0;
      color: #2a2a2a;
      text-align: justify;
    }

    ul,
    ol {
      margin: 8px 0;
      padding-left: 28px;
      color: #2a2a2a;
    }

    li {
      margin-bottom: 6px;
      line-height: 1.5;
      color: #2a2a2a;
      text-align: justify;
    }

    h3 {
      font-size: 22px;
      color: #1a1a1a;
      margin-top: 20px;
      margin-bottom: 12px;
      font-weight: 600;
      text-align: left;
    }

    h4 {
      font-size: 18px;
      color: #1a1a1a;
      margin-top: 16px;
      margin-bottom: 10px;
      font-weight: 600;
      text-align: left;
    }

    strong {
      color: #000000;
      font-weight: 600;
    }

    em {
      font-style: italic;
    }

    a {
      ${mixins.inlineLink};
      color: ${colors.green};
    }

    img {
      width: 100%;
      max-width: 100%;
      margin: 30px 0;
      border-radius: 8px;
      display: block;
    }

    blockquote {
      border-left: 3px solid ${colors.green};
      padding-left: 20px;
      margin: 20px 0;
      font-style: italic;
      color: ${colors.slate};
    }

    code {
      background-color: rgba(100, 255, 218, 0.1);
      color: ${colors.green};
      padding: 3px 6px;
      border-radius: 3px;
      font-family: ${fonts.SFMono};
      font-size: ${fontSizes.sm};
    }

    pre {
      background-color: ${colors.lightNavy};
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 20px 0;

      code {
        background-color: transparent;
        padding: 0;
      }
    }
  }
`;

const StyledCombinedInfo = styled.div`
  /* Styles are inherited from StyledSection */
`;

const StyledKeywordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: 16px;
`;

const StyledKeywordTitle = styled.h4`
  font-size: 18px;
  color: #1a1a1a;
  margin-right: 12px;
  margin-bottom: 0;
  font-weight: 600;
  white-space: nowrap;
`;

const ProjectTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, type, author, cover, tech, github, external, pdf, video } = frontmatter;

  // Parse HTML and split into sections based on h2 tags
  const contentRef = useRef(null);
  const [sections, setSections] = React.useState([]);

  useEffect(() => {
    if (html) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const contentSections = [];
      let currentSection = null;

      Array.from(doc.body.children).forEach(element => {
        if (element.tagName === 'H2') {
          // Start new section
          if (currentSection) {
            contentSections.push(currentSection);
          }
          currentSection = {
            title: element.textContent,
            content: '',
          };
        } else if (element.tagName === 'HR') {
          // HR marks end of section
          if (currentSection) {
            contentSections.push(currentSection);
            currentSection = null;
          }
        } else if (currentSection) {
          // Add to current section
          currentSection.content += element.outerHTML;
        }
      });

      // Don't forget last section
      if (currentSection) {
        contentSections.push(currentSection);
      }

      setSections(contentSections);
    }
  }, [html]);

  return (
    <Layout location={location}>
      <Helmet>
        <title>{title} | Rong Huang</title>
        <meta name="description" content={title} />
      </Helmet>

      <StyledProjectContainer>
        <StyledBackLink>
          <span className="arrow">&larr;</span>
          <Link to="/#projects">返回主页</Link>
        </StyledBackLink>

        <StyledProjectHeader>
          <StyledLabel>{type || 'Featured Project'}</StyledLabel>
          <StyledTitle>{title}</StyledTitle>
          {author && <StyledAuthor dangerouslySetInnerHTML={{ __html: author }} />}
        </StyledProjectHeader>

        <StyledProjectContent>
          {/* Links Section (if any) */}
          {(pdf || video || github || external) && (
            <StyledSection>
              <StyledCombinedInfo>
                <div>
                  <h4 className="subsection-title">Links</h4>
                  <StyledLinkWrapper>
                    {pdf && (
                      <StyledButton
                        href={pdf}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="PDF Document"
                      >
                        Paper
                      </StyledButton>
                    )}
                    {video && (
                      <StyledButton
                        href={video}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Video"
                      >
                        Video
                      </StyledButton>
                    )}
                    {github && (
                      <StyledButton
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        Code
                      </StyledButton>
                    )}
                    {external && (
                      <StyledButton
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                      >
                        Website
                      </StyledButton>
                    )}
                  </StyledLinkWrapper>
                </div>
              </StyledCombinedInfo>
            </StyledSection>
          )}

          {/* Markdown Content as Cards */}
          {sections.map((section, index) => (
            <StyledSection key={index}>
              <h2 className="section-title">{section.title}</h2>
              <div
                className="section-content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />

              {/* Add Keywords below Abstract section */}
              {section.title === 'Abstract' && tech && tech.length > 0 && (
                <StyledKeywordsContainer style={{ marginTop: '20px' }}>
                  <StyledKeywordTitle>Keywords:</StyledKeywordTitle>
                  <StyledTechList>
                    {tech.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </StyledTechList>
                </StyledKeywordsContainer>
              )}
            </StyledSection>
          ))}
        </StyledProjectContent>
      </StyledProjectContainer>
    </Layout>
  );
};

export default ProjectTemplate;

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        author
        date
        cover {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tech
        github
        external
        pdf
        video
        slug
      }
    }
  }
`;
