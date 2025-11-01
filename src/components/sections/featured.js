import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledContent = styled.div`
  flex: 1;
  min-width: 0;
  max-width: calc(100% - 270px);
  ${media.thone`
    width: 100%;
    max-width: none;
  `};
`;
const StyledLabel = styled.h4`
  font-size: ${fontSizes.smish};
  font-weight: normal;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const StyledProjectName = styled.h5`
  font-size: 25px;
  margin: 0 0 7px;
  color: ${colors.lightestSlate};
  ${media.tablet`font-size: 20px;`};
  ${media.thone`color: ${colors.lightestSlate};`};
  a {
    ${media.tablet`display: block;`};
  }
`;

const StyledAuthor = styled.div`
  font-size: 16px;
  color: #888888;
  margin-bottom: 15px;
  font-style: italic;
  ${media.thone`color: #888888;`};
`;
const StyledDescription = styled.div`
  color: ${colors.slate};
  font-size: ${fontSizes.lg};
  line-height: 1.6;
  margin: 10px 0;

  p {
    margin: 0;
  }

  ul {
    margin: 2px 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 1px;
    line-height: 1.5;
  }

  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 15px 0 10px;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: 12px;
    color: ${colors.slate};
    background-color: ${colors.transGreen};
    padding: 3px 6px;
    margin-right: 6px;
    margin-bottom: 6px;
    border-radius: 3px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 10px;
`;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 4px;
  border: 1px solid ${colors.green};
  border-radius: 3px;
  background-color: transparent;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-size: 11px;
  font-weight: 800;
  text-decoration: none;
  transition: ${theme.transition};
  min-width: 50px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 2px;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};
    transform: translateY(-1px);
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
const StyledFeaturedImg = styled(Img)`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  transition: ${theme.transition};
  object-fit: contain;
  object-position: center;
  ${media.tablet`
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  `};
`;
const StyledImgContainer = styled.a`
  position: relative;
  background-color: transparent;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  width: 250px;
  height: 300px;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.thone`
    width: 100%;
    height: 200px;
  `};
  &:hover,
  &:focus {
    &:before {
      opacity: 1;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
  }
`;
const StyledProject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 20px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: ${theme.borderRadius};
  ${mixins.boxShadow};
  transition: ${theme.transition};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  ${media.thone`
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  `};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Featured = ({ data }) => {
  const featuredProjects = data.filter(({ node }) => node);

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledContainer id="projects">
      <Heading ref={revealTitle}>Selected Publications</Heading>

      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover, pdf, video, author, type } = frontmatter;

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div>
                  <StyledImgContainer
                    href={external ? external : github ? github : '#'}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    {cover && cover.childImageSharp && cover.childImageSharp.fluid ? (
                      <StyledFeaturedImg fluid={cover.childImageSharp.fluid} alt={title} />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#f0f0f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#666',
                          fontSize: '14px',
                        }}
                      >
                        No Image
                      </div>
                    )}
                  </StyledImgContainer>

                  <StyledLinkWrapper>
                    {github && (
                      <StyledButton
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link"
                      >
                        Code
                      </StyledButton>
                    )}
                    {pdf && (
                      <StyledButton
                        href={pdf}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="PDF Link"
                      >
                        PDF
                      </StyledButton>
                    )}
                    {video && (
                      <StyledButton
                        href={video}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Video Link"
                      >
                        Video
                      </StyledButton>
                    )}
                    {external && !pdf && !video && (
                      <StyledButton
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                      >
                        Link
                      </StyledButton>
                    )}
                  </StyledLinkWrapper>
                </div>

                <StyledContent>
                  <StyledLabel>{type || 'Featured Project'}</StyledLabel>
                  <StyledProjectName>
                    {external ? (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                      >
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </StyledProjectName>
                  {author && <StyledAuthor dangerouslySetInnerHTML={{ __html: author }} />}
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <StyledTechList>
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </StyledTechList>
                  )}
                </StyledContent>
              </StyledProject>
            );
          })}
      </div>
    </StyledContainer>
  );
};

Featured.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Featured;
