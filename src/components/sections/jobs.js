import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledJobTitle = styled.h4`
  color: #333333;
  font-size: ${fontSizes.xl};
  font-weight: 600;
  margin-bottom: 5px;
  text-align: left;
`;
const StyledCompany = styled.div`
  color: ${colors.slate};
  font-size: ${fontSizes.lg};
  font-weight: 500;
  margin-bottom: 3px;
  text-align: left;

  a {
    color: ${colors.slate};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledKeywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
  text-align: left;
`;

const StyledSupervisor = styled.div`
  font-size: ${fontSizes.lg};
  font-weight: normal;
  color: ${colors.slate};
  margin-bottom: 3px;
  text-align: left;
`;

const StyledTag = styled.span`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.slate};
  background-color: ${colors.transGreen};
  padding: 5px 10px;
  border-radius: 3px;
  display: inline-block;
`;

const StyledJobsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 18px;
  max-width: 800px;
  margin: 10px;
  width: 100%;
`;

const StyledJobCard = styled.div`
  background-color: white;
  border-radius: ${theme.borderRadius};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0px 20px;
  border-left: 7px solid ${colors.slate};
  text-align: left;

  h3 {
    margin-top: 0;
    text-align: left;
  }

  /* 卡片内正文字体调整 */
  p {
    font-size: ${fontSizes.lg};
    line-height: 1.15;
    color: ${colors.slate};
    margin-bottom: 15px;
    text-align: left;
  }

  ul {
    font-size: ${fontSizes.md};
    line-height: 1.15;
    color: ${colors.slate};
    text-align: left;
  }
`;

const Jobs = ({ data }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="jobs" ref={revealContainer}>
      <Heading>Education</Heading>
      <StyledJobsGrid>
        {data &&
          data.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, url, company, Supervisor, Keywords } = frontmatter;
            return (
              <StyledJobCard key={i}>
                <StyledJobTitle>{title}</StyledJobTitle>
                <StyledCompany>
                  <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                    {company}
                  </a>
                </StyledCompany>
                {Supervisor && (
                  <StyledSupervisor>
                    Supervisor: <span dangerouslySetInnerHTML={{ __html: Supervisor }} />
                  </StyledSupervisor>
                )}
                {Keywords && (
                  <StyledKeywords>
                    {Keywords.split(',').map((keyword, index) => (
                      <StyledTag key={index}>{keyword.trim()}</StyledTag>
                    ))}
                  </StyledKeywords>
                )}
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </StyledJobCard>
            );
          })}
      </StyledJobsGrid>
    </StyledContainer>
  );
};

Jobs.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Jobs;
