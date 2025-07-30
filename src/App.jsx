import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faSearch, faShoppingCart, faShare, faLink, faGlobe, faHashtag, faEnvelope, faClock, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CatalogFilters from './CatalogFilters';
import CatalogPage from './CatalogPage';
import HomePage from './HomePage';
import ProductDetailPage from './ProductDetailPage';

const GlobalBackground = styled.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
`;

const AppContainer = styled.div`
  color: #000000;
  font-family: 'Inter', sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 100px;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

// Шапка
const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(47, 84, 131, 0.1);
  z-index: 1000;
`;

const TopHeader = styled.div`
  width: 100%;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

const BottomHeader = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const TopHeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    max-width: 1200px;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const BottomHeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    max-width: 1200px;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const Logo = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: 300;
  color: #000000;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    width: auto;
  }
`;

const TopHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const TopHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TopPhoneNumber = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  
  &:hover {
    color: #1a2f4b;
  }
`;

const CallbackButton = styled(motion.button)`
  background: #2f5483;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
`;

const CallbackButtonSecondary = styled(motion.button)`
  background: transparent;
  color: #2f5483;
  border: 1px solid #2f5483;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-1px);
  }
`;

const TopNavLink = styled(motion.a)`
  color: #666666;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    color: #2f5483;
  }
`;

const TopNavDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const TopNavDropdownButton = styled(motion.div)`
  color: #666666;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  &:hover {
    color: #2f5483;
  }
`;

const TopNavDropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  padding: 0.5rem 0;
`;

const TopNavDropdownItem = styled.a`
  display: block;
  padding: 0.7rem 1rem;
  color: #333333;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 400;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    color: #2f5483;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 100%;

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: #000000;
  text-decoration: none;
  font-weight: 300;
  font-size: 0.8rem;
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

const BottomHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const BottomHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
`;

const CatalogDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const CatalogButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #2f5483;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
`;

const CatalogDropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.15);
  padding: 0.5rem;
  min-width: 400px;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
`;

const CatalogItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.9rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(47, 84, 131, 0.1);
  }
`;

const HeaderSearchContainer = styled.div`
  position: relative;
  flex: 1;
  margin-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const HeaderSearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #333333;
  background: #ffffff;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999999;
  }
`;

const HeaderSearchIcon = styled.div`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999999;
  font-size: 0.9rem;
`;

const HeaderSearchSuggestions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.15);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  display: ${props => props.show ? 'block' : 'none'};
`;

const HeaderSuggestionItem = styled.div`
  padding: 0.8rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(47, 84, 131, 0.05);
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(47, 84, 131, 0.05);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const HeaderSuggestionTitle = styled.div`
  font-weight: 500;
  color: #2f5483;
  margin-bottom: 0.2rem;
`;

const HeaderSuggestionDetails = styled.div`
  font-size: 0.8rem;
  color: #666666;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
  height: 100%;

  @media (max-width: 1200px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 35px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchButton = styled(motion.button)`
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 0.4rem 1rem;
  color: #2f5483;
  font-size: 0.9rem;
  cursor: pointer;
  height: 35px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

const CitySelect = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #000000;
  font-size: 0.75rem;
  font-weight: 300;
  cursor: pointer;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 35px;
  
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CityIcon = styled.div`
  font-size: 0.9rem;
  color: #2f5483;
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



const PhoneIcon = styled.div`
  font-size: 0.9rem;
  color: #2f5483;
  display: flex;
  align-items: center;
`;

const CartButton = styled(motion.button)`
  position: relative;
  background: #2f5483;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

const CartIcon = styled.div`
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
`;

const CartText = styled.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
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

// Футер
const Footer = styled.footer`
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  padding: 6rem 2rem 4rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);

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
  font-size: 0.85rem;
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
  font-size: 0.9rem;
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
  font-size: 1.2rem;
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
  font-size: 0.9rem;
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

function App() {
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const [headerSearchQuery, setHeaderSearchQuery] = useState('');
  const [headerSearchSuggestions, setHeaderSearchSuggestions] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Загружаем товары для поиска в шапке
    fetch('/catalog-products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Ошибка загрузки товаров:', error));
  }, []);

  // Обработчик клика вне области каталога
  useEffect(() => {
    const handleClickOutside = (event) => {
      const catalogDropdown = event.target.closest('.catalog-dropdown');
      if (!catalogDropdown && catalogDropdownOpen) {
        setCatalogDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [catalogDropdownOpen]);



  // Функция генерации подсказок для поиска в шапке
  const generateHeaderSuggestions = () => {
    if (!headerSearchQuery.trim() || headerSearchQuery.length < 2) return [];
    
    const query = headerSearchQuery.toLowerCase().trim();
    const suggestions = [];
    
    products.forEach(product => {
      if (product.name.toLowerCase().includes(query)) {
        suggestions.push({
          type: 'name',
          title: product.name,
          details: `${product.brand} • ${product.category}`,
          product: product
        });
      }
    });
    
    products.forEach(product => {
      if (product.brand.toLowerCase().includes(query)) {
        suggestions.push({
          type: 'brand',
          title: product.brand,
          details: `${product.name} • ${product.category}`,
          product: product
        });
      }
    });
    
    const uniqueSuggestions = suggestions.filter((suggestion, index, self) => 
      index === self.findIndex(s => s.title === suggestion.title && s.type === suggestion.type)
    );
    
    return uniqueSuggestions.slice(0, 6);
  };

  return (
    <Router>
      <GlobalBackground>
        <AppContainer>
        <Header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TopHeader>
            <TopHeaderContent>
              <TopHeaderLeft>
                <Logo>
                  <img src="/logo.png" alt="Стройэнергетика" />
                </Logo>
                <TopPhoneNumber href="tel:+79991234567">
                  <FontAwesomeIcon icon={faPhone} />
                  +7 (999) 123-45-67
                </TopPhoneNumber>
              </TopHeaderLeft>
              <TopHeaderRight>
                <TopNavDropdown>
                  <TopNavDropdownButton 
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setClientsDropdownOpen(!clientsDropdownOpen)}
                    onMouseEnter={() => setClientsDropdownOpen(true)}
                    onMouseLeave={() => setClientsDropdownOpen(false)}
                  >
                    Клиентам
                    <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.7rem' }} />
                  </TopNavDropdownButton>
                  <TopNavDropdownContent 
                    isOpen={clientsDropdownOpen}
                    onMouseEnter={() => setClientsDropdownOpen(true)}
                    onMouseLeave={() => setClientsDropdownOpen(false)}
                  >
                    <TopNavDropdownItem href="/services/consultation">Консультация</TopNavDropdownItem>
                    <TopNavDropdownItem href="/services/delivery">Доставка</TopNavDropdownItem>
                    <TopNavDropdownItem href="/services/meter-verification">Поверка счетчиков электрической энергии</TopNavDropdownItem>
                    <TopNavDropdownItem href="/services/transformer-verification">Поверка трансформаторов тока (напряжения)</TopNavDropdownItem>
                    <TopNavDropdownItem href="/services/installation">Монтаж оборудования</TopNavDropdownItem>
                    <TopNavDropdownItem href="/services/commissioning">Наладка</TopNavDropdownItem>
                  </TopNavDropdownContent>
                </TopNavDropdown>
                <TopNavLink whileHover={{ scale: 1.02 }}>Прайс-лист</TopNavLink>
                <TopNavLink whileHover={{ scale: 1.02 }}>Информация</TopNavLink>
                <TopNavLink whileHover={{ scale: 1.02 }}>Контакты</TopNavLink>
                <CallbackButtonSecondary whileHover={{ scale: 1.02 }}>
                  Заказать звонок
                </CallbackButtonSecondary>
                <CallbackButton whileHover={{ scale: 1.02 }}>
                  Отправить заявку
                </CallbackButton>
              </TopHeaderRight>
            </TopHeaderContent>
          </TopHeader>
          
          <BottomHeader>
            <BottomHeaderContent>
              <BottomHeaderLeft>
                <CatalogDropdown className="catalog-dropdown">
                  <CatalogButton 
                    onClick={() => setCatalogDropdownOpen(!catalogDropdownOpen)}
                    whileHover={{ scale: 1.02 }}
                  >
                    Каталог товаров
                    <FontAwesomeIcon icon={faSearch} />
                  </CatalogButton>
                  <CatalogDropdownContent isOpen={catalogDropdownOpen}>
                    <CatalogItem href="/catalog">Все товары</CatalogItem>
                    <CatalogItem href="/catalog?category=Однофазные счетчики">Однофазные счетчики</CatalogItem>
                    <CatalogItem href="/catalog?category=Трехфазные счетчики">Трехфазные счетчики</CatalogItem>
                    <CatalogItem href="/catalog?category=Устройства сбора и передачи данных">Устройства сбора и передачи данных</CatalogItem>
                  </CatalogDropdownContent>
                </CatalogDropdown>
              </BottomHeaderLeft>
              
              <BottomHeaderRight>
                <HeaderSearchContainer>
                  <HeaderSearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                  </HeaderSearchIcon>
                  <HeaderSearchInput
                    type="text"
                    placeholder="Поиск товаров..."
                    value={headerSearchQuery}
                    onChange={(e) => {
                      setHeaderSearchQuery(e.target.value);
                      setHeaderSearchSuggestions(e.target.value.length >= 2);
                    }}
                    onFocus={() => {
                      if (headerSearchQuery.length >= 2) {
                        setHeaderSearchSuggestions(true);
                      }
                    }}
                    onBlur={() => {
                      setTimeout(() => setHeaderSearchSuggestions(false), 200);
                    }}
                  />
                  <HeaderSearchSuggestions show={headerSearchSuggestions}>
                    {generateHeaderSuggestions().map((suggestion, index) => (
                      <HeaderSuggestionItem
                        key={`header-${suggestion.type}-${index}`}
                        onClick={() => {
                          setHeaderSearchQuery(suggestion.title);
                          setHeaderSearchSuggestions(false);
                        }}
                      >
                        <HeaderSuggestionTitle>{suggestion.title}</HeaderSuggestionTitle>
                        <HeaderSuggestionDetails>{suggestion.details}</HeaderSuggestionDetails>
                      </HeaderSuggestionItem>
                    ))}
                  </HeaderSearchSuggestions>
                </HeaderSearchContainer>
                
                <CartButton whileHover={{ scale: 1.02 }}>
                  <CartIcon>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </CartIcon>
                  <CartText>Корзина</CartText>
                  <CartCount>3</CartCount>
                </CartButton>
              </BottomHeaderRight>
            </BottomHeaderContent>
          </BottomHeader>
        </Header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>

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
      </GlobalBackground>
    </Router>
  );
}

export default App; 