import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faSearch, faShoppingCart, faInfoCircle, faUsers, faEnvelope, faClock, faClipboardList, faComments, faTruck, faTools, faHeadset, faShieldAlt, faTruckFast, faPercent, faCertificate, faShare, faLink, faGlobe, faHashtag } from '@fortawesome/free-solid-svg-icons';
import CatalogFilters from './CatalogFilters';

const AppContainer = styled.div`
  background: #ffffff;
  min-height: 100vh;
  color: #2f5483;
  font-family: 'Inter', sans-serif;
`;

// Шапка
const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.2rem 2rem;
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  align-items: center;
  background: #ffffff;
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(47, 84, 131, 0.1);
  height: 85px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: 300;
  color: #2f5483;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  height: 100%;
  
  img {
    height: 40px;
    width: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 100%;
`;

const NavLink = styled(motion.a)`
  color: #2f5483;
  text-decoration: none;
  font-weight: 300;
  font-size: 0.9rem;
  cursor: pointer;
  opacity: 0.9;
  letter-spacing: 0.5px;
  text-transform: none;
  display: flex;
  align-items: center;
  height: 100%;
  
  &:hover {
    opacity: 1;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
  height: 100%;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 35px;
`;

const SearchInput = styled.input`
  background: rgba(47, 84, 131, 0.05);
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 20px;
  padding: 0.4rem 1rem 0.4rem 2.2rem;
  color: #2f5483;
  font-size: 0.85rem;
  width: 180px;
  transition: all 0.3s ease;
  font-weight: 300;
  height: 100%;

  &::placeholder {
    color: rgba(47, 84, 131, 0.5);
  }

  &:focus {
    outline: none;
    background: rgba(47, 84, 131, 0.08);
    width: 220px;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.8rem;
  color: rgba(47, 84, 131, 0.7);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

const CitySelect = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2f5483;
  font-size: 0.85rem;
  font-weight: 300;
  cursor: pointer;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  background: rgba(47, 84, 131, 0.05);
  border: 1px solid rgba(47, 84, 131, 0.1);
  transition: all 0.3s ease;
  height: 35px;
  
  &:hover {
    background: rgba(47, 84, 131, 0.08);
  }
`;

const CityIcon = styled.div`
  font-size: 0.9rem;
  color: rgba(47, 84, 131, 0.7);
  display: flex;
  align-items: center;
`;

const CityText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;

const CityName = styled.span`
  font-weight: 400;
`;

const PhoneNumber = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 400;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  background: rgba(47, 84, 131, 0.05);
  border: 1px solid rgba(47, 84, 131, 0.1);
  transition: all 0.3s ease;
  height: 35px;
  white-space: nowrap;
  
  &:hover {
    background: rgba(47, 84, 131, 0.08);
  }
`;

const PhoneIcon = styled.div`
  font-size: 0.9rem;
  color: rgba(47, 84, 131, 0.7);
  display: flex;
  align-items: center;
`;

const Hero = styled(motion.section)`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  background: url('/banner01.jpg') center center/cover no-repeat;
`;

const HeroContent = styled(motion.div)`
  text-align: left;
  z-index: 2;
  padding: 4rem;
  max-width: 600px;
  margin-left: 8%;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  font-family: 'Inter', sans-serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.6rem;
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
  gap: 1.5rem;
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
  font-size: 1.2rem;
  padding: 0.5rem 0;
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
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    
    &:after {
      content: '→';
      font-size: 1.2rem;
      transition: transform 0.3s ease;
      opacity: 0.9;
    }
  }
  
  &:hover span:after {
    transform: translateX(3px);
  }
`;

const FloatingElements = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: rgba(47, 84, 131, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 20px;
`;

// Новые секции
const Section = styled(motion.section)`
  padding: 8rem 0;
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.6rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 6rem;
  color: #2f5483;
  letter-spacing: 0.03em;
  position: relative;
  width: 100%;
  text-transform: none;
  
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
      #2f5483,
      transparent
    );
    opacity: 0.4;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  margin: 0;
  padding: 0;
`;

const FeatureCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 1;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(47, 84, 131, 0.08);
  padding: 2rem;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2f5483;
    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(47, 84, 131, 0.15);
    
    &:before {
      transform: translateY(0);
    }
    
    &:after {
      opacity: 1;
    }
  }
`;

const FeatureIcon = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #2f5483;
  transition: all 0.4s ease;
  position: relative;
  z-index: 3;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    z-index: -1;
    transform: scale(0.8);
    transition: transform 0.4s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(47, 84, 131, 0.1);
    border-radius: 50%;
    z-index: -1;
    transform: scale(1.2);
    transition: transform 0.4s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.1);
    color: #2f5483;
    
    &:before {
      transform: scale(1.1);
    }
    
    &:after {
      transform: scale(1.4);
      border-color: rgba(47, 84, 131, 0.2);
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: #2f5483;
  font-weight: 500;
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
    background: rgba(47, 84, 131, 0.2);
    transition: all 0.4s ease;
  }
  
  ${FeatureCard}:hover & {
    color: #ffffff;
    
    &:after {
      width: 60px;
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const FeatureText = styled.p`
  color: #2f5483;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  opacity: 0.7;
  max-width: 90%;
  transition: all 0.4s ease;
  z-index: 3;
  
  ${FeatureCard}:hover & {
    color: #ffffff;
    opacity: 0.9;
  }
`;

const AccentLine = styled.div`
  position: absolute;
  width: 1px;
  height: 0;
  background: rgba(47, 84, 131, 0.1);
  z-index: 2;
  transition: all 0.4s ease;
  
  ${FeatureCard}:hover & {
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
  }
`;

// Секция преимуществ
const AdvantagesSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding: 8rem 0;
  
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
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  margin: 0;
  padding: 0;
  gap: 0;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled(motion.div)`
  background: #ffffff;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(47, 84, 131, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(47, 84, 131, 0.08);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #2f5483, rgba(47, 84, 131, 0.5));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.03), rgba(47, 84, 131, 0.08));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.12);
    
    &:before {
      opacity: 1;
    }
    
    &:after {
      opacity: 1;
    }
  }
`;

const AdvantageIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(47, 84, 131, 0.05);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #2f5483;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  margin-bottom: 1rem;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2f5483;
    border-radius: 15px;
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
`;

const AdvantageTitle = styled.h3`
  font-size: 1.2rem;
  color: #2f5483;
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  line-height: 1.4;
  position: relative;
  padding-bottom: 0.8rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: rgba(47, 84, 131, 0.2);
    transition: width 0.4s ease;
  }
  
  ${AdvantageCard}:hover & {
    &:after {
      width: 40px;
    }
  }
`;

const AdvantageDescription = styled.p`
  color: #2f5483;
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
  transition: opacity 0.4s ease;
  max-width: 90%;
  
  ${AdvantageCard}:hover & {
    opacity: 0.9;
  }
`;

// Секция с товарами
const ProductsSection = styled(Section)`
  background: #f8f9fa;
  padding: 0;
  width: 100%;
  
  ${SectionTitle} {
    margin-top: 6rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ProductCard = styled(motion.div)`
  background: #ffffff;
  position: relative;
  border: 1px solid rgba(47, 84, 131, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(47, 84, 131, 0.03), rgba(47, 84, 131, 0.08));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: #2f5483;
    transition: height 0.4s ease;
  }

  &:hover {
    box-shadow: 0 15px 35px rgba(47, 84, 131, 0.12);
    z-index: 1;

    &:before {
      opacity: 1;
    }

    &:after {
      height: 100%;
    }
  }
`;

const ProductInfo = styled.div`
  padding: 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  position: relative;
  z-index: 1;
`;

const ProductTitle = styled.h3`
  font-size: 1.3rem;
  color: #2f5483;
  margin-bottom: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: rgba(47, 84, 131, 0.2);
    transition: width 0.4s ease;
  }

  ${ProductCard}:hover & {
    &:after {
      width: 60px;
    }
  }
`;

const ProductDescription = styled.p`
  color: #2f5483;
  opacity: 0.8;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;
  transition: opacity 0.4s ease;

  ${ProductCard}:hover & {
    opacity: 0.9;
  }
`;

const ProductPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

const BuyButton = styled(motion.button)`
  width: 100%;
  background: #2f5483;
  border: none;
  padding: 1.2rem;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  box-shadow: 0 4px 15px rgba(47, 84, 131, 0.2);
  
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
  
  span {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
  }
  
  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
    stroke: #ffffff;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(47, 84, 131, 0.3);
    background: #3a6294;
    
    &:before {
      opacity: 1;
    }
    
    span {
      transform: translateX(-2px);
    }
    
    svg {
      transform: translateX(4px);
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(47, 84, 131, 0.2);
  }
`;

// Футер
const Footer = styled.footer`
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  padding: 6rem 2rem 4rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
  
  img {
    height: 40px;
    width: auto;
    filter: brightness(0) invert(1);
  }
`;

const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const FooterContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    transform: translateX(5px);

    svg {
      color: #ffffff;
    }
  }
`;

const FooterPayment = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const PaymentIcon = styled.div`
  width: 40px;
  height: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.3));
  }
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  
  &:before {
    content: '→';
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #ffffff;
    padding-left: 20px;
    
    &:before {
      opacity: 1;
      left: 0;
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const CartIcon = styled.div`
  font-size: 0.9rem;
  color: rgba(47, 84, 131, 0.7);
  display: flex;
  align-items: center;
`;

const CartCount = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4757;
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const ContactCard = styled(motion.div)`
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  border-radius: 20px;
  padding: 40px;
  color: white;
  box-shadow: 0 20px 40px rgba(47, 84, 131, 0.2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
`;

const ContactCardItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
`;

const ContactLabel = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ContactValue = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

const CartButton = styled(motion.button)`
  position: relative;
  background: none;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  background: rgba(47, 84, 131, 0.05);
  border: 1px solid rgba(47, 84, 131, 0.1);
  cursor: pointer;
  height: 35px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(47, 84, 131, 0.08);
  }
`;

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AppContainer>
      <Header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LogoSection>
          <Logo>
            <img src="/logo.png" alt="Стройэнергетика" />
          </Logo>
          <CitySelect>
            <CityIcon>
              <FontAwesomeIcon icon={faLocationDot} />
            </CityIcon>
            <CityText>
              <CityName>Москва</CityName>
            </CityText>
          </CitySelect>
        </LogoSection>
        <Nav>
          <NavLink whileHover={{ scale: 1.05 }}>Главная</NavLink>
          <NavLink whileHover={{ scale: 1.05 }}>Каталог</NavLink>
          <NavLink whileHover={{ scale: 1.05 }}>Информация</NavLink>
          <NavLink whileHover={{ scale: 1.05 }}>Клиентам</NavLink>
          <NavLink whileHover={{ scale: 1.05 }}>О компании</NavLink>
          <NavLink whileHover={{ scale: 1.05 }}>Контакты</NavLink>
        </Nav>
        <HeaderRight>
          <SearchContainer>
            <SearchIcon>
              <FontAwesomeIcon icon={faSearch} />
            </SearchIcon>
            <SearchInput placeholder="Поиск..." />
          </SearchContainer>
          <CartButton whileHover={{ scale: 1.05 }}>
            <CartIcon>
              <FontAwesomeIcon icon={faShoppingCart} />
            </CartIcon>
            <CartCount>3</CartCount>
          </CartButton>
          <PhoneNumber href="tel:+79991234567">
            <PhoneIcon>
              <FontAwesomeIcon icon={faPhone} />
            </PhoneIcon>
            +7 (999) 123-45-67
          </PhoneNumber>
        </HeaderRight>
      </Header>

      <Hero>
        <HeroContent
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Title>Счетчики электроэнергии</Title>
          <Subtitle>Официальный дилер с гарантией качества и профессиональной установкой</Subtitle>
          <BenefitsContainer>
            <BenefitItem>Гарантия 5 лет на все модели</BenefitItem>
            <BenefitItem>Бесплатная доставка от 10 000 ₽</BenefitItem>
            <BenefitItem>Профессиональный монтаж</BenefitItem>
          </BenefitsContainer>
          <CTAButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Смотреть каталог</span>
          </CTAButton>
        </HeroContent>
      </Hero>

      <ProductsSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Популярные модели
        </SectionTitle>
        <ProductsGrid>
          <ProductCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductInfo>
              <div>
                <img src="/catal/001.webp" alt="Счетчик электроэнергии Меркурий 201.8" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                <ProductTitle>Счетчик электроэнергии Меркурий 201.8</ProductTitle>
                <ProductDescription>Однофазный многотарифный счетчик с жидкокристаллическим дисплеем</ProductDescription>
              </div>
              <div>
                <ProductPrice>2 450 ₽</ProductPrice>
                <BuyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Купить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProductInfo>
              <div>
                <img src="/catal/002.webp" alt="Счетчик электроэнергии Энергомера CE102M" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                <ProductTitle>Счетчик электроэнергии Энергомера CE102M</ProductTitle>
                <ProductDescription>Однофазный многотарифный счетчик с возможностью дистанционного снятия показаний</ProductDescription>
              </div>
              <div>
                <ProductPrice>3 200 ₽</ProductPrice>
                <BuyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Купить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProductInfo>
              <div>
                <img src="/catal/003.webp" alt="Счетчик электроэнергии Нева 103" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                <ProductTitle>Счетчик электроэнергии Нева 103</ProductTitle>
                <ProductDescription>Однофазный однотарифный счетчик с механическим отсчетным устройством</ProductDescription>
              </div>
              <div>
                <ProductPrice>1 850 ₽</ProductPrice>
                <BuyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Купить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProductInfo>
              <div>
                <img src="/catal/004.webp" alt="Счетчик электроэнергии Меркурий 230" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                <ProductTitle>Счетчик электроэнергии Меркурий 230</ProductTitle>
                <ProductDescription>Трехфазный многотарифный счетчик с возможностью программирования</ProductDescription>
              </div>
              <div>
                <ProductPrice>4 500 ₽</ProductPrice>
                <BuyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Купить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ProductInfo>
              <div>
                <img src="/catal/005.webp" alt="Счетчик электроэнергии Меркурий 201.5" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                <ProductTitle>Счетчик электроэнергии Меркурий 201.5</ProductTitle>
                <ProductDescription>Однофазный однотарифный счетчик с жидкокристаллическим дисплеем</ProductDescription>
              </div>
              <div>
                <ProductPrice>2 100 ₽</ProductPrice>
                <BuyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Купить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ProductInfo>
              <div>
                <img src="/catal/006.webp" alt="Счетчик электроэнергии Энергомера CE301" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                <ProductTitle>Счетчик электроэнергии Энергомера CE301</ProductTitle>
                <ProductDescription>Трехфазный однотарифный счетчик с механическим отсчетным устройством</ProductDescription>
              </div>
              <div>
                <ProductPrice>3 800 ₽</ProductPrice>
                <BuyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Купить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ProductInfo>
              <div>
                <img src="/catal/007.webp" alt="Счетчик электроэнергии Нева 303" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                <ProductTitle>Счетчик электроэнергии Нева 303</ProductTitle>
                <ProductDescription>Трехфазный многотарифный счетчик с жидкокристаллическим дисплеем</ProductDescription>
              </div>
              <div>
                <ProductPrice>4 200 ₽</ProductPrice>
                <BuyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Купить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <ProductInfo>
              <div>
                <img src="/catal/008.webp" alt="Счетчик электроэнергии Меркурий 231" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                <ProductTitle>Счетчик электроэнергии Меркурий 231</ProductTitle>
                <ProductDescription>Трехфазный многотарифный счетчик с возможностью дистанционного снятия показаний</ProductDescription>
              </div>
              <div>
                <ProductPrice>5 000 ₽</ProductPrice>
                <BuyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Купить</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>
        </ProductsGrid>
      </ProductsSection>

      <AdvantagesSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Наши преимущества
        </SectionTitle>
        <AdvantagesGrid>
          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
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
            <div style={{ 
              position: 'absolute', 
              top: '-10px', 
              left: '-5px', 
              fontSize: '140px', 
              fontWeight: 'bold', 
              color: 'rgba(47, 84, 131, 0.08)', 
              zIndex: 0,
              lineHeight: 1,
              pointerEvents: 'none'
            }}>
              1
            </div>
            <FeatureIcon>
              <FontAwesomeIcon icon={faClipboardList} />
            </FeatureIcon>
            <FeatureTitle>Заявка</FeatureTitle>
            <FeatureText>
              Оставьте заявку на сайте или позвоните нам
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <div style={{ 
              position: 'absolute', 
              top: '-10px', 
              left: '-5px', 
              fontSize: '140px', 
              fontWeight: 'bold', 
              color: 'rgba(47, 84, 131, 0.08)', 
              zIndex: 0,
              lineHeight: 1,
              pointerEvents: 'none'
            }}>
              2
            </div>
            <FeatureIcon>
              <FontAwesomeIcon icon={faComments} />
            </FeatureIcon>
            <FeatureTitle>Консультация</FeatureTitle>
            <FeatureText>
              Получите консультацию от наших специалистов
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <div style={{ 
              position: 'absolute', 
              top: '-10px', 
              left: '-5px', 
              fontSize: '140px', 
              fontWeight: 'bold', 
              color: 'rgba(47, 84, 131, 0.08)', 
              zIndex: 0,
              lineHeight: 1,
              pointerEvents: 'none'
            }}>
              3
            </div>
            <FeatureIcon>
              <FontAwesomeIcon icon={faTruck} />
            </FeatureIcon>
            <FeatureTitle>Доставка</FeatureTitle>
            <FeatureText>
              Доставим оборудование в удобное для вас время
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <div style={{ 
              position: 'absolute', 
              top: '-10px', 
              left: '-5px', 
              fontSize: '140px', 
              fontWeight: 'bold', 
              color: 'rgba(47, 84, 131, 0.08)', 
              zIndex: 0,
              lineHeight: 1,
              pointerEvents: 'none'
            }}>
              4
            </div>
            <FeatureIcon>
              <FontAwesomeIcon icon={faTools} />
            </FeatureIcon>
            <FeatureTitle>Установка</FeatureTitle>
            <FeatureText>
              Профессиональный монтаж и настройка оборудования
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <div style={{ 
              position: 'absolute', 
              top: '-10px', 
              left: '-5px', 
              fontSize: '140px', 
              fontWeight: 'bold', 
              color: 'rgba(47, 84, 131, 0.08)', 
              zIndex: 0,
              lineHeight: 1,
              pointerEvents: 'none'
            }}>
              5
            </div>
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

      <Section>
        <SectionTitle>Как нас найти</SectionTitle>
        <div style={{ width: '100%', height: '400px', background: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: '#2f5483' }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c&amp;source=constructor&amp;ll=37.6173,55.7558&amp;z=10"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </Section>

      <Footer>
        <FooterContent>
          <FooterColumn>
            <FooterLogo>
              <img src="/logo.png" alt="Стройэнергетика" />
            </FooterLogo>
            <FooterDescription>
              Официальный дилер счетчиков электроэнергии с гарантией качества и профессиональной установкой. Работаем с 2010 года.
            </FooterDescription>
            <FooterContact>
              <FooterContactItem>
                <FontAwesomeIcon icon={faPhone} />
                +7 (999) 123-45-67
              </FooterContactItem>
              <FooterContactItem>
                <FontAwesomeIcon icon={faEnvelope} />
                info@stroienergetika.ru
              </FooterContactItem>
              <FooterContactItem>
                <FontAwesomeIcon icon={faClock} />
                Пн-Пт: 9:00 - 18:00
              </FooterContactItem>
            </FooterContact>
            <FooterPayment>
              <PaymentIcon>VISA</PaymentIcon>
              <PaymentIcon>MC</PaymentIcon>
              <PaymentIcon>MIR</PaymentIcon>
            </FooterPayment>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>О компании</FooterTitle>
            <FooterLink href="#">О нас</FooterLink>
            <FooterLink href="#">Сертификаты</FooterLink>
            <FooterLink href="#">Новости</FooterLink>
            <FooterLink href="#">Вакансии</FooterLink>
            <FooterLink href="#">Партнеры</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Помощь</FooterTitle>
            <FooterLink href="#">Доставка</FooterLink>
            <FooterLink href="#">Оплата</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Возврат</FooterLink>
            <FooterLink href="#">Гарантия</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Контакты</FooterTitle>
            <FooterLink href="#">Москва, ул. Примерная, 123</FooterLink>
            <FooterLink href="#">Санкт-Петербург, пр. Невский, 45</FooterLink>
            <FooterLink href="#">Екатеринбург, ул. Ленина, 78</FooterLink>
            <FooterLink href="#">Казань, ул. Баумана, 12</FooterLink>
          </FooterColumn>
        </FooterContent>
        <FooterBottom>
          <div>© 2024 Стройэнергетика. Все права защищены.</div>
          <FooterSocial>
            <SocialLink href="#"><FontAwesomeIcon icon={faShare} /></SocialLink>
            <SocialLink href="#"><FontAwesomeIcon icon={faLink} /></SocialLink>
            <SocialLink href="#"><FontAwesomeIcon icon={faGlobe} /></SocialLink>
            <SocialLink href="#"><FontAwesomeIcon icon={faHashtag} /></SocialLink>
          </FooterSocial>
        </FooterBottom>
      </Footer>
    </AppContainer>
  );
}

export default App; 