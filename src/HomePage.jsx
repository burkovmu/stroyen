import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Утилита для определения мобильного устройства
const isMobileDevice = () => {
  return window.innerWidth <= 768;
};

// Утилита для получения анимации в зависимости от устройства
const getAnimationProps = (desktopProps, mobileProps = {}) => {
  if (isMobileDevice()) {
    return mobileProps;
  }
  return desktopProps;
};
import { faShieldAlt, faTruckFast, faTools, faHeadset, faPercent, faCertificate, faClipboardList, faTruck, faShoppingCart, faComments, faSearch, faPaperPlane, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';

const Hero = styled(motion.section)`
  height: 700px;
  min-height: 700px;
  max-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 0;
  margin-top: 150px;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  @media (max-width: 768px) {
    height: auto;
    min-height: auto;
    max-height: none;
    margin-top: 75px;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
`;

const MobileBannerImage = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 300px;
    background: url('/banner.jpg') top right/cover no-repeat;
    position: relative;
  }
`;

const MobileBannerContent = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    background: #ffffff;
    padding: 2rem 1.5rem;
    width: 100%;
    text-align: center;
  }
`;

const MobileTitle = styled.h1`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #2f5483;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
`;

const MobileSubtitle = styled.p`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1rem;
    color: #666666;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`;

const MobileHeroButtons = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const MobilePrimaryButton = styled(motion.button)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #2f5483;
    border: none;
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #1a2f4b;
    }
  }
`;

const MobileSecondaryButton = styled(motion.button)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: transparent;
    border: 2px solid #2f5483;
    color: #2f5483;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`;

const MobileHeroFeatures = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const MobileHeroFeature = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #2f5483;
    font-size: 0.9rem;
    font-weight: 500;
    
    svg {
      color: #28a745;
      font-size: 1rem;
    }
  }
`;

const SlideBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => `url('${props.image}') top right/cover no-repeat`};
  background-color: #f8f9fa;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.8s ease-in-out;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 10;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SlideIndicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: ${props => props.active ? '#ffffff' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

const HeroContent = styled(motion.div)`
  text-align: left;
  z-index: 2;
  padding: 4rem;
  max-width: 600px;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroContentInner = styled(motion.div)`
  max-width: 600px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  font-family: 'Inter', sans-serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.95;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.01em;
`;

const BenefitsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 3.5rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0.5));
    border-radius: 3px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  }
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: #ffffff;
  font-size: 1rem;
  padding: 0.3rem 0;
  font-weight: 400;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.01em;
  
  &:before {
    content: "→";
    color: #ffffff;
    font-weight: bold;
    font-size: 1.3rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CTAButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 400;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;
  backdrop-filter: blur(8px);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.2);
    
    &:before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  span {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
  }
  
  &:hover span:after {
    transform: translateX(3px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  z-index: 2;

  span {
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  svg {
    width: 24px;
    height: 24px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Section = styled(motion.section)`
  padding: 8rem 0;
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 0rem;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 6rem;
  color: #000000;
  letter-spacing: 0.03em;
  position: relative;
  width: 100%;
  text-transform: none;
  max-width: 1400px;
  padding: 0 2rem;
  
  &:before {
    content: '';
    position: absolute;
    bottom: -1.2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      #000000,
      transparent
    );
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 4rem;
    padding: 0 1rem;
  }
`;

const AdvantagesSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding: 8rem 0;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const AdvantageCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(47, 84, 131, 0.08);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.02), rgba(47, 84, 131, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(47, 84, 131, 0.12);
    border-color: rgba(47, 84, 131, 0.2);
    
    &:before {
      transform: scaleX(1);
    }
    
    &:after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const AdvantageIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.08), rgba(47, 84, 131, 0.12));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #2f5483;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  margin: 0 auto 1.5rem;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #2f5483, #4a90e2);
    border-radius: 20px;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }
  
  svg {
    position: relative;
    z-index: 1;
    transition: all 0.4s ease;
  }
  
  ${AdvantageCard}:hover & {
    transform: scale(1.1);
    
    &:before {
      transform: scale(1);
    }
    
    svg {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`;

const AdvantageTitle = styled.h3`
  font-size: 1.3rem;
  color: #000000;
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: rgba(47, 84, 131, 0.3);
    transition: width 0.4s ease;
  }
  
  ${AdvantageCard}:hover & {
    &:after {
      width: 60px;
      background: rgba(47, 84, 131, 0.6);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

const AdvantageDescription = styled.p`
  color: #666;
  opacity: 0.9;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
  transition: opacity 0.4s ease;
  max-width: 100%;
  
  ${AdvantageCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(47, 84, 131, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.02), rgba(47, 84, 131, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(47, 84, 131, 0.12);
    border-color: rgba(47, 84, 131, 0.2);
    
    &:before {
      transform: scaleX(1);
    }
    
    &:after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #2f5483, #4a90e2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  z-index: 2;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.08), rgba(47, 84, 131, 0.12));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: #2f5483;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #2f5483, #4a90e2);
    border-radius: 20px;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }
  
  svg {
    position: relative;
    z-index: 1;
    transition: all 0.4s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.1);
    
    &:before {
      transform: scale(1);
    }
    
    svg {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: #000000;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.4;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 3;
  transition: color 0.4s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: rgba(47, 84, 131, 0.3);
    transition: all 0.4s ease;
  }
  
  ${FeatureCard}:hover & {
    color: #2f5483;
    
    &:after {
      width: 60px;
      background: rgba(47, 84, 131, 0.6);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

const FeatureText = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.9;
  transition: all 0.4s ease;
  z-index: 3;
  
  ${FeatureCard}:hover & {
    color: #333;
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const ScrollHint = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const AboutCompanySection = styled(Section)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 8rem 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`;

const AboutContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

const AboutContent = styled(motion.div)`
  @media (max-width: 1024px) {
    order: 2;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const AboutFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AboutFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  
  &:before {
    content: "✓";
    color: #2f5483;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const AboutImage = styled(motion.div)`
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.05), rgba(47, 84, 131, 0.1));
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.02), rgba(47, 84, 131, 0.05));
    border-radius: 20px;
  }

  @media (max-width: 1024px) {
    order: 1;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const AboutImageContent = styled.div`
  position: relative;
  z-index: 2;
`;

const AboutImageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const AboutImageText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const AboutStat = styled.div`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(47, 84, 131, 0.1);
`;

const AboutStatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AboutStatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ContactSection = styled(Section)`
  background: #ffffff;
  padding: 4rem 0 0 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  color: #000000;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`;

const ContactContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

const ContactContent = styled(motion.div)`
  @media (max-width: 1024px) {
    order: 2;
  }
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  
  &:before {
    content: "✓";
    color: #2f5483;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const ContactForm = styled(motion.form)`
  background: #ffffff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.08);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }

  @media (max-width: 1024px) {
    order: 1;
  }
  
  @media (max-width: 768px) {
    order: 2;
    padding: 2rem;
  }
`;

const FormContent = styled.div`
  position: relative;
  z-index: 2;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(47, 84, 131, 0.2);
  border-radius: 12px;
  background: #ffffff;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(47, 84, 131, 0.2);
  border-radius: 12px;
  background: #ffffff;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.1), rgba(47, 84, 131, 0.15));
  border: 1px solid rgba(47, 84, 131, 0.2);
  color: #2f5483;
  padding: 1.2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.2), rgba(47, 84, 131, 0.25));
    border-color: rgba(47, 84, 131, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(47, 84, 131, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const CustomOrderBanner = styled.div`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(47, 84, 131, 0.3);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.4;
  }
`;

const CustomOrderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const CustomOrderIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
`;

const CustomOrderTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CustomOrderText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CustomOrderButton = styled(motion.button)`
  background: white;
  color: #2f5483;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;



const CategoriesSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 8rem 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const CategoryButton = styled(motion.button)`
  background: #ffffff;
  border: 2px solid rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.05), rgba(47, 84, 131, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(47, 84, 131, 0.15);
    border-color: rgba(47, 84, 131, 0.3);
    color: #2f5483;
    
    &:before {
      opacity: 1;
    }
    
    &:after {
      transform: scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem 1rem;
    min-height: 70px;
  }
`;

const PopularProductsSection = styled(Section)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 8rem 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 769px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(47, 84, 131, 0.1), transparent);
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 1440px) {
    max-width: 1200px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 1024px) {
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const ProductCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(47, 84, 131, 0.08);
  position: relative;
  cursor: pointer;
  min-width: 0; // Предотвращает переполнение
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(47, 84, 131, 0.15);
    border-color: rgba(47, 84, 131, 0.2);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #4a90e2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }
  
  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
  
  @media (max-width: 1024px) {
    height: 180px;
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    height: 160px;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    height: 140px;
    padding: 0.8rem;
  }
`;

const ProductBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 1024px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const ProductBrand = styled.div`
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductType = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const CurrentPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
  margin-right: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ProductButton = styled(motion.button)`
  width: 100%;
  background: #2f5483;
  border: none;
  padding: 0.8rem 1.5rem;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1024px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    gap: 0.4rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
    min-height: 44px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: white;
  border: none;
  padding: 1rem 2rem;
  color: #2f5483;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const HeroFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const HeroFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { getTotalItems, getTotalPrice, addToCart } = useCart();
  const navigate = useNavigate();

  // Состояние для слайдшоу
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Массив изображений для слайдшоу
  const slides = [
    '/banner.jpg'
  ];

  // Популярные товары
  const popularProducts = [
    {
      id: 1,
      name: "АГАТ 1-3",
      type: "Однофазный счетчик с ЭМУ на DIN-рейку",
      brand: "АГАТ",
      price: 3800,
      originalPrice: 4500,
      discount: 15,
      image: "agat-1-3.svg",
      mainImage: "/images/products/agat-1-3/0001.png",
      images: [
        "/images/products/agat-1-3/0001.png",
        "/images/products/agat-1-3/0002.png",
        "/images/products/agat-1-3/0003.png",
        "/images/products/agat-1-3/0004.png"
      ]
    },
    {
      id: 2,
      name: "АГАТ 1-4",
      type: "Однофазный счетчик с ЭМУ на DIN-рейку и панель",
      brand: "АГАТ",
      price: 4200,
      originalPrice: 4200,
      discount: 0,
      image: "agat-1-4.svg",
      mainImage: "/images/products/agat-1-4/01.png",
      images: [
        "/images/products/agat-1-4/01.png",
        "/images/products/agat-1-4/02.png"
      ]
    },
    {
      id: 3,
      name: "АГАТ 2-32(5)",
      type: "Однофазный счетчик с ЖКИ на DIN-рейку",
      brand: "АГАТ",
      price: 5200,
      originalPrice: 6500,
      discount: 20,
      image: "agat-2-32.svg",
      mainImage: "/images/products/agat-2-32/001.png",
      images: [
        "/images/products/agat-2-32/001.png",
        "/images/products/agat-2-32/002.png",
        "/images/products/agat-2-32/003.png",
        "/images/products/agat-2-32/004.png"
      ]
    },
    {
      id: 4,
      name: "АГАТ 2-42(5)",
      type: "Однофазный счетчик с ЖКИ на DIN-рейку или панель",
      brand: "АГАТ",
      price: 5800,
      originalPrice: 5800,
      discount: 0,
      image: "agat-2-42.svg",
      mainImage: "/images/products/agat-2-42/001.png",
      images: [
        "/images/products/agat-2-42/001.png",
        "/images/products/agat-2-42/002.png",
        "/images/products/agat-2-42/003.png",
        "/images/products/agat-2-42/004.png"
      ]
    },
    {
      id: 5,
      name: "АГАТ S200",
      type: "Однофазный многофункциональный счетчик с ЖКИ",
      brand: "АГАТ",
      price: 7200,
      originalPrice: 8500,
      discount: 15,
      image: "agat-s200.svg",
      mainImage: "/images/products/agat-s200/001.png",
      images: [
        "/images/products/agat-s200/001.png",
        "/images/products/agat-s200/002.png",
        "/images/products/agat-s200/003.png"
      ]
    },
    {
      id: 6,
      name: "НЕМО-1",
      type: "Однофазный многофункциональный счетчик с ЖКИ",
      brand: "НЕМО",
      price: 7500,
      originalPrice: 9000,
      discount: 17,
      image: "nemo-1.svg",
      mainImage: "/images/products/nemo-1/001.png",
      images: [
        "/images/products/nemo-1/001.png",
        "/images/products/nemo-1/002.png",
        "/images/products/nemo-1/003.png"
      ]
    },
    {
      id: 7,
      name: "АГАТ 3-3.100.2",
      type: "Трехфазный счетчик с ЖКИ на DIN-рейку",
      brand: "АГАТ",
      price: 8500,
      originalPrice: 10500,
      discount: 19,
      image: "agat-3-100-2.svg",
      mainImage: "/images/products/agat-3-100-2/001.png",
      images: [
        "/images/products/agat-3-100-2/001.png",
        "/images/products/agat-3-100-2/002.png"
      ]
    },
    {
      id: 8,
      name: "RTU-325",
      type: "Устройство сбора и передачи данных",
      brand: "АГАТ",
      price: 20000,
      originalPrice: 25000,
      discount: 20,
      image: "rtu-325.svg",
      mainImage: "/images/products/rtu-325/001.png",
      images: [
        "/images/products/rtu-325/001.png",
        "/images/products/rtu-325/002.png"
      ]
    }
  ];

  // Автоматическая прокрутка вверх при загрузке главной страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Переключаем каждые 5 секунд

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleAddToCart = useCallback((product) => {
    addToCart(product);
  }, [addToCart]);

  return (
    <>
      <Hero>
        {/* Мобильная версия банера */}
        <MobileBannerImage />
        <MobileBannerContent>
          <MobileTitle>
            Надежные счетчики электроэнергии
          </MobileTitle>
          <MobileSubtitle>
            Официальный дилер АГАТ, НЕМО, Меркурий и других ведущих производителей. 
            Гарантия до 16 лет. Доставка по России. Установка под ключ.
          </MobileSubtitle>
          <MobileHeroButtons>
            <MobilePrimaryButton
              onClick={() => navigate('/catalog')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              Смотреть каталог
            </MobilePrimaryButton>
            <MobileSecondaryButton
              onClick={() => navigate('/contacts')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FontAwesomeIcon icon={faPhone} />
              Получить консультацию
            </MobileSecondaryButton>
          </MobileHeroButtons>
          <MobileHeroFeatures>
            <MobileHeroFeature>
              <FontAwesomeIcon icon={faCheck} />
              <span>Гарантия до 16 лет</span>
            </MobileHeroFeature>
            <MobileHeroFeature>
              <FontAwesomeIcon icon={faCheck} />
              <span>Доставка по России</span>
            </MobileHeroFeature>
            <MobileHeroFeature>
              <FontAwesomeIcon icon={faCheck} />
              <span>Установка под ключ</span>
            </MobileHeroFeature>
          </MobileHeroFeatures>
        </MobileBannerContent>

        {/* Десктопная версия банера */}
        {/* Слайды фона */}
        {slides.map((slide, index) => (
          <SlideBackground
            key={index}
            image={slide}
            active={index === currentSlide}
          />
        ))}
        
        {/* Контент баннера */}
        <HeroContent
          {...getAnimationProps(
            { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 } },
            { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
          )}
        >
          <HeroContentInner>
            <Title>
              Надежные счетчики электроэнергии
            </Title>
            <Subtitle>
              Официальный дилер АГАТ, НЕМО, Меркурий и других ведущих производителей. 
              Гарантия до 16 лет. Доставка по России. Установка под ключ.
            </Subtitle>
            <HeroButtons>
              <PrimaryButton
                onClick={() => navigate('/catalog')}
                {...getAnimationProps({ whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } })}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                Смотреть каталог
              </PrimaryButton>
              <SecondaryButton
                onClick={() => navigate('/contacts')}
                {...getAnimationProps({ whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } })}
              >
                <FontAwesomeIcon icon={faPhone} />
                Получить консультацию
              </SecondaryButton>
            </HeroButtons>
            <HeroFeatures>
              <HeroFeature>
                <FontAwesomeIcon icon={faCheck} />
                <span>Гарантия до 16 лет</span>
              </HeroFeature>
              <HeroFeature>
                <FontAwesomeIcon icon={faCheck} />
                <span>Доставка по России</span>
              </HeroFeature>
              <HeroFeature>
                <FontAwesomeIcon icon={faCheck} />
                <span>Установка под ключ</span>
              </HeroFeature>
            </HeroFeatures>
          </HeroContentInner>
        </HeroContent>
        
        {/* Индикаторы слайдов */}
        <SlideIndicators>
          {slides.map((_, index) => (
            <SlideIndicator
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </SlideIndicators>
      </Hero>

      <PopularProductsSection>
        <SectionTitle
          {...getAnimationProps(
            { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
            { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
          )}
        >
          Популярные товары
        </SectionTitle>
        <ProductsGrid>
          {popularProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              {...getAnimationProps(
                { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 } },
                { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
              )}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <ProductImage>
                {product.mainImage ? (
                  <img src={product.mainImage} alt={product.name} />
                ) : (
                  <img src={`/images/products/${product.image}`} alt={product.name} />
                )}
                {product.discount > 0 && (
                  <ProductBadge>-{product.discount}%</ProductBadge>
                )}
              </ProductImage>
              <ProductContent>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.name}</ProductName>
                <ProductType>{product.type}</ProductType>
                <ProductPrice>
                  <CurrentPrice>{product.price.toLocaleString()} ₽</CurrentPrice>
                  {product.originalPrice > product.price && (
                    <OriginalPrice>{product.originalPrice.toLocaleString()} ₽</OriginalPrice>
                  )}
                </ProductPrice>
                <ProductButton
                  key={`add-to-cart-${product.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  {...getAnimationProps({ whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } })}
                  style={{ transformOrigin: 'center' }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Добавить в корзину
                </ProductButton>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>
      </PopularProductsSection>

      <AboutCompanySection>
        <SectionTitle>О компании</SectionTitle>
        <AboutContainer>
          <AboutContent
            {...getAnimationProps(
              { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 } },
              { initial: { opacity: 1, x: 0 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0 } }
            )}
          >
            
            <AboutDescription>
              Мы являемся официальным дилером по продаже и установке счетчиков электроэнергии. Наш опыт работы в сфере энергоснабжения насчитывает более 10 лет, что позволяет нам предлагать только качественное оборудование и профессиональный сервис.
            </AboutDescription>
            <AboutFeatures>
              <AboutFeature>Официальные дилеры ведущих производителей счетчиков</AboutFeature>
              <AboutFeature>Гарантия на все оборудование</AboutFeature>
              <AboutFeature>Доставка по всей России</AboutFeature>
              <AboutFeature>Профессиональный монтаж и настройка</AboutFeature>
              <AboutFeature>Круглосуточная техническая поддержка</AboutFeature>
            </AboutFeatures>
          </AboutContent>
          <AboutImage
            {...getAnimationProps(
              { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 } },
              { initial: { opacity: 1, x: 0 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0 } }
            )}
          >
            <AboutImageContent>
              <AboutImageTitle>Наши преимущества</AboutImageTitle>
              <AboutImageText>
                Мы предлагаем широкий ассортимент счетчиков электроэнергии, от однофазных до многофункциональных. Наши цены всегда конкурентоспособны, а качество гарантировано.
              </AboutImageText>
              <AboutStats>
                <AboutStat>
                  <AboutStatNumber>10+</AboutStatNumber>
                  <AboutStatLabel>лет на рынке</AboutStatLabel>
                </AboutStat>
                <AboutStat>
                  <AboutStatNumber>1000+</AboutStatNumber>
                  <AboutStatLabel>установленных счетчиков</AboutStatLabel>
                </AboutStat>
              </AboutStats>
            </AboutImageContent>
          </AboutImage>
        </AboutContainer>
      </AboutCompanySection>

      <AdvantagesSection>
        <SectionTitle
          {...getAnimationProps(
            { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
            { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
          )}
        >
          Наши преимущества
        </SectionTitle>
        <AdvantagesGrid>
          <AdvantageCard
            {...getAnimationProps(
              { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.1 } },
              { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
            )}
          >
            <AdvantageIcon>
              <FontAwesomeIcon icon={faShieldAlt} />
            </AdvantageIcon>
            <AdvantageTitle>Гарантия качества</AdvantageTitle>
            <AdvantageDescription>
              Все счетчики проходят тщательную проверку и имеют официальную гарантию производителя сроком до 5 лет
            </AdvantageDescription>
          </AdvantageCard>

          <AdvantageCard
            {...getAnimationProps(
              { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.2 } },
              { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
            )}
          >
            <AdvantageIcon>
              <FontAwesomeIcon icon={faTruckFast} />
            </AdvantageIcon>
            <AdvantageTitle>Быстрая доставка</AdvantageTitle>
            <AdvantageDescription>
              Доставляем заказы в течение 1-2 дней по всей России с возможностью отслеживания в реальном времени
            </AdvantageDescription>
          </AdvantageCard>

          <AdvantageCard
            {...getAnimationProps(
              { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.3 } },
              { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
            )}
          >
            <AdvantageIcon>
              <FontAwesomeIcon icon={faTools} />
            </AdvantageIcon>
            <AdvantageTitle>Профессиональный монтаж</AdvantageTitle>
            <AdvantageDescription>
              Опытные специалисты выполнят установку и настройку счетчиков с соблюдением всех норм безопасности
            </AdvantageDescription>
          </AdvantageCard>

          <AdvantageCard
            {...getAnimationProps(
              { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.4 } },
              { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
            )}
          >
            <AdvantageIcon>
              <FontAwesomeIcon icon={faHeadset} />
            </AdvantageIcon>
            <AdvantageTitle>Поддержка 24/7</AdvantageTitle>
            <AdvantageDescription>
              Круглосуточная техническая поддержка и консультации по всем вопросам от квалифицированных специалистов
            </AdvantageDescription>
          </AdvantageCard>

          <AdvantageCard
            {...getAnimationProps(
              { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.5 } },
              { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
            )}
          >
            <AdvantageIcon>
              <FontAwesomeIcon icon={faPercent} />
            </AdvantageIcon>
            <AdvantageTitle>Выгодные цены</AdvantageTitle>
            <AdvantageDescription>
              Регулярные акции, скидки и специальные предложения для постоянных клиентов и оптовых закупок
            </AdvantageDescription>
          </AdvantageCard>

          <AdvantageCard
            {...getAnimationProps(
              { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.6 } },
              { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
            )}
          >
            <AdvantageIcon>
              <FontAwesomeIcon icon={faCertificate} />
            </AdvantageIcon>
            <AdvantageTitle>Официальный дилер</AdvantageTitle>
            <AdvantageDescription>
              Работаем напрямую с производителями, предоставляем все необходимые документы и сертификаты
            </AdvantageDescription>
          </AdvantageCard>
        </AdvantagesGrid>
      </AdvantagesSection>

      <Section>
        <SectionTitle>Как мы работаем</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <StepNumber>1</StepNumber>
            <FeatureIcon>
              <FontAwesomeIcon icon={faClipboardList} />
            </FeatureIcon>
            <FeatureTitle>Заявка</FeatureTitle>
            <FeatureText>
              Оставьте заявку на сайте или позвоните нам
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <StepNumber>2</StepNumber>
            <FeatureIcon>
              <FontAwesomeIcon icon={faComments} />
            </FeatureIcon>
            <FeatureTitle>Консультация</FeatureTitle>
            <FeatureText>
              Получите консультацию от наших специалистов
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <StepNumber>3</StepNumber>
            <FeatureIcon>
              <FontAwesomeIcon icon={faTruck} />
            </FeatureIcon>
            <FeatureTitle>Доставка</FeatureTitle>
            <FeatureText>
              Доставим оборудование в удобное для вас время
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <StepNumber>4</StepNumber>
            <FeatureIcon>
              <FontAwesomeIcon icon={faTools} />
            </FeatureIcon>
            <FeatureTitle>Установка</FeatureTitle>
            <FeatureText>
              Профессиональный монтаж и настройка оборудования
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <StepNumber>5</StepNumber>
            <FeatureIcon>
              <FontAwesomeIcon icon={faHeadset} />
            </FeatureIcon>
            <FeatureTitle>Поддержка</FeatureTitle>
            <FeatureText>
              Обеспечиваем техническую поддержку 24/7
            </FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      <CustomOrderBanner>
        <CustomOrderContent>
          <CustomOrderIcon>
            <FontAwesomeIcon icon={faSearch} />
          </CustomOrderIcon>
          <CustomOrderTitle>Не нашли нужный товар в каталоге?</CustomOrderTitle>
          <CustomOrderText>
            Мы специализируемся на поиске и поставке любых счетчиков электроэнергии от ведущих производителей. Работаем с 50+ производителями и найдем нужный товар за 24 часа.
          </CustomOrderText>
          <CustomOrderButton
            {...getAnimationProps({ whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } })}
            onClick={() => {
              // Прокрутка к форме обратной связи
              const contactSection = document.querySelector('.contact-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Купить под заказ
          </CustomOrderButton>
        </CustomOrderContent>
      </CustomOrderBanner>

      <ContactSection className="contact-section">
        <ContactContainer>
          <ContactContent
            {...getAnimationProps(
              { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 } },
              { initial: { opacity: 1, x: 0 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0 } }
            )}
          >
            <ContactTitle>Свяжитесь с нами</ContactTitle>
            <ContactDescription>
              Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации по выбору счетчиков электроэнергии.
            </ContactDescription>
            <ContactInfo>
              <ContactItem>Бесплатная консультация специалиста</ContactItem>
              <ContactItem>Подбор оптимального решения</ContactItem>
              <ContactItem>Расчет стоимости монтажа</ContactItem>
              <ContactItem>Ответ в течение 30 минут</ContactItem>
            </ContactInfo>
          </ContactContent>
          <ContactForm
            {...getAnimationProps(
              { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 } },
              { initial: { opacity: 1, x: 0 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0 } }
            )}
            onSubmit={(e) => {
              e.preventDefault();
              // Здесь будет логика отправки формы
              alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
            }}
          >
            <FormContent>
              <FormTitle>Оставить заявку</FormTitle>
              <FormGroup>
                <FormLabel>Ваше имя *</FormLabel>
                <FormInput 
                  type="text" 
                  placeholder="Введите ваше имя"
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Телефон *</FormLabel>
                <FormInput 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput 
                  type="email" 
                  placeholder="your@email.com"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Сообщение</FormLabel>
                <FormTextarea 
                  placeholder="Опишите ваши потребности или задайте вопрос..."
                  rows="4"
                />
              </FormGroup>
              <SubmitButton
                type="submit"
                {...getAnimationProps({ whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } })}
              >
                Отправить заявку
              </SubmitButton>
            </FormContent>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
    </>
  );
}

export default HomePage; 