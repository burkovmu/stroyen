import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTruckFast, faTools, faHeadset, faPercent, faCertificate, faClipboardList, faComments, faTruck, faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Hero = styled(motion.section)`
  height: calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  max-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 0;
  background: url('/banner01.jpg') center center/cover no-repeat;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
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
`;



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

const PopularProductsSection = styled(Section)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 8rem 0;
  position: relative;
  
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
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
`;

const ProductImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
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
`;

const ProductBrand = styled.div`
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
`;

const ProductType = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CurrentPrice = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2f5483;
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
`;

const ProductButton = styled(motion.button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #2f5483;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  backdrop-filter: blur(8px);
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    border-color: rgba(47, 84, 131, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(47, 84, 131, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { getTotalItems, getTotalPrice, addToCart } = useCart();
  const navigate = useNavigate();

  // Популярные товары
  const popularProducts = [
    {
      id: 5,
      name: "АГАТ S200",
      type: "Однофазный многофункциональный счетчик с ЖКИ",
      brand: "АГАТ",
      price: 7200,
      originalPrice: 8500,
      discount: 15,
      image: "agat-s200.svg"
    },
    {
      id: 3,
      name: "АГАТ 2-32(5)",
      type: "Однофазный счетчик с ЖКИ на DIN-рейку",
      brand: "АГАТ",
      price: 5200,
      originalPrice: 6500,
      discount: 20,
      image: "agat-2-32.svg"
    },
    {
      id: 10,
      name: "АГАТ 3-3.100.2",
      type: "Трехфазный счетчик с ЖКИ на DIN-рейку",
      brand: "АГАТ",
      price: 8500,
      originalPrice: 10500,
      discount: 19,
      image: "agat-3-100-2.svg"
    },
    {
      id: 12,
      name: "RTU-325",
      type: "Устройство сбора и передачи данных",
      brand: "АГАТ",
      price: 20000,
      originalPrice: 25000,
      discount: 20,
      image: "rtu-325.svg"
    },
    {
      id: 1,
      name: "АГАТ 1-3",
      type: "Однофазный счетчик с ЭМУ на DIN-рейку",
      brand: "АГАТ",
      price: 3800,
      originalPrice: 4500,
      discount: 15,
      image: "agat-1-3.svg"
    },
    {
      id: 2,
      name: "АГАТ 1-4",
      type: "Однофазный счетчик с ЭМУ на DIN-рейку и панель",
      brand: "АГАТ",
      price: 4200,
      originalPrice: 4200,
      discount: 0,
      image: "agat-1-4.svg"
    },
    {
      id: 4,
      name: "АГАТ 2-42(5)",
      type: "Однофазный счетчик с ЖКИ на DIN-рейку или панель",
      brand: "АГАТ",
      price: 5800,
      originalPrice: 5800,
      discount: 0,
      image: "agat-2-42.svg"
    },
    {
      id: 6,
      name: "НЕМО-1",
      type: "Однофазный многофункциональный счетчик с ЖКИ",
      brand: "НЕМО",
      price: 7500,
      originalPrice: 9000,
      discount: 17,
      image: "nemo-1.svg"
    }
  ];

  // Автоматическая прокрутка вверх при загрузке главной страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <Hero>
        <HeroContent
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <HeroContentInner>
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
              onClick={() => window.location.href = '/catalog'}
            >
              <span>Смотреть каталог</span>
            </CTAButton>
          </HeroContentInner>
        </HeroContent>
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </ScrollIndicator>
      </Hero>

      <PopularProductsSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Популярные товары
        </SectionTitle>
        <ProductsGrid>
          {popularProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductImage>
                <img src={`/images/products/${product.image}`} alt={product.name} />
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
                  onClick={() => handleAddToCart(product)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Добавить в корзину
                </ProductButton>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>
      </PopularProductsSection>

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



      {getTotalItems() > 0 && (
        <Section>
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <CTAButton
              onClick={() => navigate('/checkout')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}
            >
              Оформить заказ ({getTotalItems()} товаров • {getTotalPrice().toLocaleString()} ₽)
            </CTAButton>
          </div>
        </Section>
      )}
    </>
  );
}

export default HomePage; 