import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
`;

const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;
  ${media.tablet`display: block;`};
`;

const StyledContent = styled.div`
  width: 80%;
  max-width: 800px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

const StyledPic = styled.div`
  position: relative;
  width: 20%;
  max-width: 250px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0; width: 70%;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;

const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: normal;
  filter: none;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;

const StyledAvatarContainer = styled.div`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.lightestSlate};
  margin-left: -20px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    border: 2px solid ${colors.green};
    top: 10px;
    left: 10px;
    z-index: -1;
  }
`;

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.green};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;
const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;
const StyledTitle = styled.h2`
  font-size: 50px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 30px;`};
  ${media.phablet`font-size: 20px;`};
  ${media.phone`font-size: 10px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 30px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 30px;`};
  ${media.tablet`font-size: 10px;`};
  ${media.phablet`font-size: 10px;`};
  ${media.phone`font-size: 5px;`};
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 100%;
  max-width: 100%;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  ${media.phablet`
    flex-direction: column;
    gap: 15px;
  `};
`;

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  padding: 0.5rem 1rem; /* 自定义尺寸：上下1rem，左右1.5rem */
  font-size: ${fontSizes.s}; /* 自定义字体大小 */
`;

const StyledScholarLink = styled.a`
  ${mixins.bigButton};
  padding: 0.5rem 1rem; /* 自定义尺寸：上下1rem，左右1.5rem */
  font-size: ${fontSizes.s}; /* 自定义字体大小 */
`;

const StyledCVLink = styled.a`
  ${mixins.bigButton};
  background-color: transparent;
  color: ${colors.green};
  border: 1px solid ${colors.green};
  padding: 0.5rem 1rem; /* 自定义尺寸：上下1rem，左右1.5rem */
  font-size: ${fontSizes.s}; /* 自定义字体大小 */

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};
  }
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;
  const { title, name, subtitle, skills, avatar } = frontmatter;

  const headerSection = () => (
    <div style={{ transitionDelay: '100ms', width: '100%' }}>
      <StyledOverline>{title}</StyledOverline>
      <StyledTitle>{name}.</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </div>
  );

  const contentSection = () => (
    <StyledFlexContainer style={{ transitionDelay: '400ms' }}>
      <StyledContent>
        <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
        {skills && (
          <SkillsContainer>
            {skills.map((skill, i) => (
              <Skill key={i}>{skill}</Skill>
            ))}
          </SkillsContainer>
        )}
        <StyledButtonContainer>
          <StyledCVLink href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </StyledCVLink>
          <StyledScholarLink
            href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </StyledScholarLink>
          <StyledEmailLink href={`mailto:${email}`}>Email</StyledEmailLink>
        </StyledButtonContainer>
      </StyledContent>
      {avatar && avatar.childImageSharp && avatar.childImageSharp.fluid && (
        <StyledPic>
          <StyledAvatarContainer>
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarContainer>
        </StyledPic>
      )}
    </StyledFlexContainer>
  );

  const items = [headerSection, contentSection];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
