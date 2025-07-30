import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTruckFast, faTools, faHeadset, faPercent, faCertificate, faClipboardList, faComments, faTruck } from '@fortawesome/free-solid-svg-icons';
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
    border: 2px solid rgba(47, 84, 131, 0.2);
    
    &:before {
      opacity: 1;
    }
    
    &:after {
      opacity: 1;
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
  font-size: 1.1rem;
  color: #000000;
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
    background: rgba(0, 0, 0, 0.2);
    transition: width 0.4s ease;
  }
`;

const ProductDescription = styled.p`
  color: #000000;
  opacity: 0.8;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
  transition: opacity 0.4s ease;
`;

const ProductPrice = styled.div`
  font-size: 1.5rem;
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
  font-size: 1.1rem;
  color: #000000;
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
    background: rgba(0, 0, 0, 0.2);
    transition: width 0.4s ease;
  }
  
  ${AdvantageCard}:hover & {
    &:after {
      width: 40px;
    }
  }
`;

const AdvantageDescription = styled.p`
  color: #000000;
  opacity: 0.8;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
  transition: opacity 0.4s ease;
  max-width: 90%;
  
  ${AdvantageCard}:hover & {
    opacity: 0.9;
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
  font-size: 1.1rem;
  color: #000000;
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
    background: rgba(0, 0, 0, 0.2);
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
  color: #000000;
  line-height: 1.6;
  font-size: 0.9rem;
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

function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { addToCart, getTotalItems } = useCart();
  const navigate = useNavigate();

  // Тестовые данные для товаров на главной странице
  const homeProducts = [
    {
      id: 'mercury-201',
      name: 'Счетчик электроэнергии Меркурий 201.8',
      brand: 'Меркурий',
      price: 2450,
      description: 'Однофазный многотарифный счетчик с жидкокристаллическим дисплеем',
      image: 'mercury-201.svg'
    },
    {
      id: 'energomera-ce102m',
      name: 'Счетчик электроэнергии Энергомера CE102M',
      brand: 'Энергомера',
      price: 3200,
      description: 'Однофазный многотарифный счетчик с возможностью дистанционного снятия показаний',
      image: 'energomera-ce102m.svg'
    },
    {
      id: 'neva-103',
      name: 'Счетчик электроэнергии Нева 103',
      brand: 'Нева',
      price: 1850,
      description: 'Однофазный однотарифный счетчик с механическим отсчетным устройством',
      image: 'neva-103.svg'
    },
    {
      id: 'mercury-230',
      name: 'Счетчик электроэнергии Меркурий 230',
      brand: 'Меркурий',
      price: 4200,
      description: 'Трехфазный многотарифный счетчик с возможностью программирования',
      image: 'mercury-230.svg'
    },
    {
      id: 'agat-1-3',
      name: 'Счетчик электроэнергии АГАТ 1-3',
      brand: 'АГАТ',
      price: 3800,
      description: 'Однофазный счетчик с электромеханическим отсчетным устройством',
      image: 'agat-1-3.svg'
    },
    {
      id: 'agat-2-32',
      name: 'Счетчик электроэнергии АГАТ 2-32',
      brand: 'АГАТ',
      price: 4500,
      description: 'Однофазный счетчик с жидкокристаллическим дисплеем',
      image: 'agat-2-32.svg'
    },
    {
      id: 'energomera-ce208',
      name: 'Счетчик электроэнергии Энергомера CE208',
      brand: 'Энергомера',
      price: 3800,
      description: 'Однофазный многотарифный счетчик с возможностью программирования',
      image: 'energomera-ce208.svg'
    },
    {
      id: 'neva-303',
      name: 'Счетчик электроэнергии Нева 303',
      brand: 'Нева',
      price: 2800,
      description: 'Однофазный многотарифный счетчик с жидкокристаллическим дисплеем',
      image: 'neva-303.svg'
    }
  ];

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductInfo>
                                <div>
                    <div style={{
                      width: '100%',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      color: '#2f5483',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      borderRadius: '8px'
                    }}>
                      Меркурий
                    </div>
                    <ProductTitle>Счетчик электроэнергии Меркурий 201.8</ProductTitle>
                    <ProductDescription>Однофазный многотарифный счетчик с жидкокристаллическим дисплеем</ProductDescription>
                  </div>
              <div>
                <ProductPrice>2 450 ₽</ProductPrice>
                <BuyButton onClick={() => addToCart(homeProducts[0])}>
                  Купить
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProductInfo>
                                <div>
                    <div style={{
                      width: '100%',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      color: '#2f5483',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      borderRadius: '8px'
                    }}>
                      Энергомера
                    </div>
                    <ProductTitle>Счетчик электроэнергии Энергомера CE102M</ProductTitle>
                    <ProductDescription>Однофазный многотарифный счетчик с возможностью дистанционного снятия показаний</ProductDescription>
                  </div>
              <div>
                <ProductPrice>3 200 ₽</ProductPrice>
                <BuyButton onClick={() => addToCart(homeProducts[1])}>
                  Купить
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProductInfo>
                                <div>
                    <div style={{
                      width: '100%',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      color: '#2f5483',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      borderRadius: '8px'
                    }}>
                      Нева
                    </div>
                    <ProductTitle>Счетчик электроэнергии Нева 103</ProductTitle>
                    <ProductDescription>Однофазный однотарифный счетчик с механическим отсчетным устройством</ProductDescription>
                  </div>
              <div>
                <ProductPrice>1 850 ₽</ProductPrice>
                <BuyButton onClick={() => addToCart(homeProducts[2])}>
                  Купить
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProductInfo>
                                <div>
                    <div style={{
                      width: '100%',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      color: '#2f5483',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      borderRadius: '8px'
                    }}>
                      Меркурий
                    </div>
                    <ProductTitle>Счетчик электроэнергии Меркурий 230</ProductTitle>
                    <ProductDescription>Трехфазный многотарифный счетчик с возможностью программирования</ProductDescription>
                  </div>
              <div>
                <ProductPrice>4 500 ₽</ProductPrice>
                <BuyButton onClick={() => addToCart(homeProducts[5])}>
                  Купить
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ProductInfo>
                                <div>
                    <div style={{
                      width: '100%',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      color: '#2f5483',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      borderRadius: '8px'
                    }}>
                      Меркурий
                    </div>
                    <ProductTitle>Счетчик электроэнергии Меркурий 201.5</ProductTitle>
                    <ProductDescription>Однофазный однотарифный счетчик с жидкокристаллическим дисплеем</ProductDescription>
                  </div>
              <div>
                <ProductPrice>2 100 ₽</ProductPrice>
                <BuyButton>Купить</BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ProductInfo>
                                <div>
                    <div style={{
                      width: '100%',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      color: '#2f5483',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      borderRadius: '8px'
                    }}>
                      Энергомера
                    </div>
                    <ProductTitle>Счетчик электроэнергии Энергомера CE301</ProductTitle>
                    <ProductDescription>Трехфазный однотарифный счетчик с механическим отсчетным устройством</ProductDescription>
                  </div>
              <div>
                <ProductPrice>3 800 ₽</ProductPrice>
                <BuyButton onClick={() => addToCart(homeProducts[4])}>
                  Купить
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ProductInfo>
                                <div>
                    <div style={{
                      width: '100%',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      color: '#2f5483',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      borderRadius: '8px'
                    }}>
                      Нева
                    </div>
                    <ProductTitle>Счетчик электроэнергии Нева 303</ProductTitle>
                    <ProductDescription>Трехфазный многотарифный счетчик с жидкокристаллическим дисплеем</ProductDescription>
                  </div>
              <div>
                <ProductPrice>2 800 ₽</ProductPrice>
                <BuyButton onClick={() => addToCart(homeProducts[7])}>
                  Купить
                </BuyButton>
              </div>
            </ProductInfo>
          </ProductCard>

          <ProductCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <ProductInfo>
                                <div>
                    <div style={{
                      width: '100%',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      color: '#2f5483',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      borderRadius: '8px'
                    }}>
                      Меркурий
                    </div>
                    <ProductTitle>Счетчик электроэнергии Меркурий 231</ProductTitle>
                    <ProductDescription>Трехфазный многотарифный счетчик с возможностью дистанционного снятия показаний</ProductDescription>
                  </div>
              <div>
                <ProductPrice>5 000 ₽</ProductPrice>
                <BuyButton onClick={() => addToCart(homeProducts[6])}>
                  Купить
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