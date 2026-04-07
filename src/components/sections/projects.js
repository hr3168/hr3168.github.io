import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: stretch;
`;
const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 35px;
  ${media.tablet`
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  `};
`;
const StyledPhotoCard = styled.button`
  border: 0;
  padding: 0;
  cursor: zoom-in;
  width: 100%;
  border-radius: ${theme.borderRadius};
  overflow: hidden;
  background: transparent;
  transition: ${theme.transition};
  position: relative;
  aspect-ratio: 1 / 1;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;
const StyledPhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 12, 27, 0.85);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
const StyledLightbox = styled.div`
  max-width: min(1100px, 95vw);
  max-height: 90vh;
`;
const StyledLightboxImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  display: block;
  border-radius: ${theme.borderRadius};
`;

const Projects = ({ data }) => {
  const [activePhoto, setActivePhoto] = useState(null);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const photos = (data || [])
    .map(({ node }) => ({
      title: node.name,
      src: node.publicURL,
    }))
    .filter(photo => photo.src);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealTitle.current, srConfig());
      revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }
  }, []);

  useEffect(() => {
    const handleEscClose = event => {
      if (event.key === 'Escape') {
        setActivePhoto(null);
      }
    };
    window.addEventListener('keydown', handleEscClose);
    return () => window.removeEventListener('keydown', handleEscClose);
  }, []);

  return (
    <StyledContainer id="projects">
      <Heading ref={revealTitle}>Photography</Heading>

      <StyledGrid>
        {photos.map((photo, i) => (
          <StyledPhotoCard
            key={photo.src}
            ref={el => (revealProjects.current[i] = el)}
            onClick={() => setActivePhoto(photo)}
            aria-label={`Open ${photo.title}`}
          >
            <StyledPhotoImage src={photo.src} alt={photo.title} loading="lazy" />
          </StyledPhotoCard>
        ))}
      </StyledGrid>

      {activePhoto && (
        <StyledOverlay onClick={() => setActivePhoto(null)} role="presentation">
          <StyledLightbox onClick={e => e.stopPropagation()}>
            <StyledLightboxImage src={activePhoto.src} alt={activePhoto.title} />
          </StyledLightbox>
        </StyledOverlay>
      )}
    </StyledContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string,
        publicURL: PropTypes.string,
      }),
    }),
  ),
};

Projects.defaultProps = {
  data: [],
};

export default Projects;
