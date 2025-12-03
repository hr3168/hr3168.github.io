import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FormattedIcon } from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.lightSlate};
  padding: 10px;
`;
const StyledGitHubInfo = styled.div`
  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;

const StyledClustrMaps = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 400px;
  min-height: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: auto;

  a {
    display: block;
    line-height: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });
  const clustrMapsContainerRef = useRef(null);
  const clustrMapsLoadedRef = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/repos/bchiang7/v4')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    // Load ClustrMaps widget
    if (
      typeof window === 'undefined' ||
      !clustrMapsContainerRef.current ||
      clustrMapsLoadedRef.current
    ) {
      return;
    }

    const loadClustrmaps = () => {
      if (clustrMapsContainerRef.current) {
        // Create the widget HTML directly
        const widgetHTML = `
          <a href="https://clustrmaps.com/site/1c8md" title="Visit tracker">
            <img src="https://clustrmaps.com/map_v2.png?d=yNdRW8g_Lz5oCcgK5nuE-zW2Q80TAUvkzKbDg84s_4g&cl=ffffff" 
                 style="max-width: 100%; height: auto;" 
                 alt="Visitors Map" />
          </a>
        `;
        clustrMapsContainerRef.current.innerHTML = widgetHTML;
        clustrMapsLoadedRef.current = true;
        console.log('ClustrMaps widget loaded');
      }
    };

    // Delay loading slightly to ensure page is fully rendered
    const timer = setTimeout(loadClustrmaps, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledContainer>
      <StyledSocial>
        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <StyledSocialLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}
                >
                  <FormattedIcon name={name} />
                </StyledSocialLink>
              </li>
            ))}
        </StyledSocialList>
      </StyledSocial>
      <StyledClustrMaps ref={clustrMapsContainerRef}>
        {/* ClustrMaps will be loaded here asynchronously */}
      </StyledClustrMaps>
    </StyledContainer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
