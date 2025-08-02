import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 12px;
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  overflow-x: auto;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #2f5483;
    border-radius: 2px;
  }
`;

const Thumbnail = styled(motion.div)`
  min-width: 80px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    border-color: #2f5483;
    transform: scale(1.05);
  }

  &:hover {
    border-color: #2f5483;
    transform: scale(1.05);
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ThumbnailPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 0.8rem;
  font-weight: bold;
`;

// Модальное окно галереи
const GalleryModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ModalNavigation = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
  pointer-events: none;
`;

const NavigationButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  pointer-events: auto;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const ProductGallery = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Получаем изображения из продукта
  const images = product?.images || [];
  const mainImage = product?.mainImage || product?.image || '';

  // Если нет изображений, используем заглушку
  const displayImages = images.length > 0 ? images : [mainImage];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === displayImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleModalClose();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  React.useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen]);

  return (
    <GalleryContainer>
      {/* Главное изображение */}
      <MainImageContainer onClick={() => handleImageClick(currentImageIndex)}>
        {displayImages[currentImageIndex] ? (
          <MainImage 
            src={displayImages[currentImageIndex]} 
            alt={product?.name || 'Товар'}
          />
        ) : (
          <PlaceholderImage>
            <FontAwesomeIcon icon={faTimes} />
          </PlaceholderImage>
        )}
      </MainImageContainer>

      {/* Миниатюры */}
      {displayImages.length > 1 && (
        <ThumbnailsContainer>
          {displayImages.map((image, index) => (
            <Thumbnail
              key={index}
              className={index === currentImageIndex ? 'active' : ''}
              onClick={() => setCurrentImageIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {image ? (
                <ThumbnailImage src={image} alt={`${product?.name || 'Товар'} ${index + 1}`} />
              ) : (
                <ThumbnailPlaceholder>
                  <FontAwesomeIcon icon={faTimes} />
                </ThumbnailPlaceholder>
              )}
            </Thumbnail>
          ))}
        </ThumbnailsContainer>
      )}

      {/* Модальное окно галереи */}
      <AnimatePresence>
        {isModalOpen && (
          <GalleryModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleModalClose}
          >
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalCloseButton onClick={handleModalClose}>
                <FontAwesomeIcon icon={faTimes} />
              </ModalCloseButton>
              
              <ModalImage 
                src={displayImages[currentImageIndex]} 
                alt={product?.name || 'Товар'}
              />
              
              <ImageCounter>
                {currentImageIndex + 1} / {displayImages.length}
              </ImageCounter>

              <ModalNavigation>
                <NavigationButton 
                  onClick={handlePrevious}
                  disabled={displayImages.length <= 1}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </NavigationButton>
                <NavigationButton 
                  onClick={handleNext}
                  disabled={displayImages.length <= 1}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </NavigationButton>
              </ModalNavigation>
            </ModalContent>
          </GalleryModal>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default ProductGallery; 