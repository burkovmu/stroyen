import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faSearch, faShoppingCart, faShare, faLink, faGlobe, faHashtag, faEnvelope, faClock, faChevronDown, faBars, faPhoneVolume, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import CatalogFilters from './CatalogFilters';
import CatalogPage from './CatalogPage';
import HomePage from './HomePage';
import ProductDetailPage from './ProductDetailPage';
import { CartProvider, useCart } from './CartContext';
import CartModalComponent from './CartModal';
import { NotificationProvider } from './Notification';
import CheckoutPage from './CheckoutPage';
import ThankYouPage from './ThankYouPage';

// Компонент для автоматической прокрутки вверх при переходе на главную
const ScrollToTop = () => {
  const location = window.location;
  
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    
    // Прокручиваем вверх при загрузке главной страницы
    handleRouteChange();
    
    // Слушаем изменения в истории браузера
    const handlePopState = () => {
      handleRouteChange();
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  // Прокручиваем вверх при каждом рендере на главной странице
  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);
  
  return null;
};

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
  
  @media (max-width: 768px) {
    display: none;
  }
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
    padding: 0.8rem 1rem;
    flex-direction: row;
    gap: 0.5rem;
    min-height: 60px;
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
  cursor: pointer;
  
  img {
    height: 40px;
    width: auto;
  }
  
  @media (max-width: 768px) {
    img {
      height: 35px;
    }
  }
`;

const TopHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const TopHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
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
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomPhoneNumber = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    color: #1a2f4b;
    background: rgba(47, 84, 131, 0.1);
    border-color: rgba(47, 84, 131, 0.2);
  }
  
  @media (max-width: 1200px) {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomEmail = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2f5483;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    color: #1a2f4b;
    background: rgba(47, 84, 131, 0.1);
    border-color: rgba(47, 84, 131, 0.2);
  }
  
  @media (max-width: 1200px) {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    display: none;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
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
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
  
  @media (max-width: 1200px) {
    gap: 0.8rem;
  }
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
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }

  &:active {
    transform: translateY(0);
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
  top: -6px;
  right: -6px;
  background: #ff4757;
  color: white;
  font-size: 0.7rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(255, 71, 87, 0.3);
  animation: ${props => props.count > 0 ? 'pulse 0.6s ease-in-out' : 'none'};
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

// Мобильное меню
const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: #2f5483;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    padding: 0.8rem;
    min-width: 44px;
    min-height: 44px;
  }
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
  }
`;

const MobileButtonsContainer = styled.div`
  display: none;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileCartButton = styled(motion.button)`
  display: none;
  background: #2f5483;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  min-width: 44px;
  min-height: 44px;
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const MobileCartCount = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background: #ff4757;
  color: white;
  font-size: 0.7rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(255, 71, 87, 0.3);
  animation: ${props => props.count > 0 ? 'pulse 0.6s ease-in-out' : 'none'};
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background: #ffffff;
  z-index: 2001;
  padding: 2rem;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 320px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: none;
    padding: 1.5rem;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const MobileMenuCloseButton = styled(motion.button)`
  background: none;
  border: none;
  color: #666666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #333333;
  }
`;

const MobileMenuSection = styled.div`
  margin-bottom: 2rem;
`;

const MobileMenuTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`;

const MobileMenuItem = styled(motion.a)`
  display: block;
  padding: 0.8rem 0;
  color: #333333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  border-bottom: 1px solid #f5f5f5;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2f5483;
    padding-left: 0.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 0;
    font-size: 0.95rem;
  }
`;

const MobileMenuDropdown = styled.div`
  margin-bottom: 1rem;
`;

const MobileMenuDropdownButton = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.8rem 0;
  background: none;
  border: none;
  color: #333333;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  border-bottom: 1px solid #f5f5f5;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2f5483;
  }
`;

const MobileMenuDropdownContent = styled(motion.div)`
  padding-left: 1rem;
  overflow: hidden;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  transition: max-height 0.3s ease;
`;

const MobileMenuDropdownItem = styled.a`
  display: block;
  padding: 0.6rem 0;
  color: #666666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2f5483;
    padding-left: 0.5rem;
  }
`;

const MobileSearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const MobileSearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
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
  
  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.95rem;
  }
`;

const MobileContactInfo = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`;

const MobileContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: #666666;
  font-size: 0.9rem;
`;

const MobileActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const MobileActionButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &.primary {
    background: #2f5483;
    color: white;
    
    &:hover {
      background: #1a2f4b;
    }
  }
  
  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 1px solid #2f5483;
    
    &:hover {
      background: #2f5483;
      color: white;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
`;

const MobileCartButtonInMenu = styled(motion.button)`
  width: 100%;
  padding: 1rem 1.5rem;
  background: #2f5483;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  position: relative;
  box-shadow: 0 2px 8px rgba(47, 84, 131, 0.2);
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.95rem;
  }
`;

const CartButtonWithContext = ({ onOpenCart }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  
  return (
    <CartButton 
      whileHover={{ scale: 1.02 }}
      onClick={onOpenCart}
    >
      <CartIcon>
        <FontAwesomeIcon icon={faShoppingCart} />
      </CartIcon>
      <CartText>Корзина</CartText>
      {totalItems > 0 && <CartCount count={totalItems}>{totalItems}</CartCount>}
    </CartButton>
  );
};

const MobileCartButtonWithContext = ({ onOpenCart }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  
  return (
    <MobileCartButton 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onOpenCart}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
      {totalItems > 0 && <MobileCartCount count={totalItems}>{totalItems}</MobileCartCount>}
    </MobileCartButton>
  );
};

const MobileCartButtonInMenuWithContext = ({ onOpenCart }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  
  return (
    <MobileCartButtonInMenu 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onOpenCart}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
      Корзина
      {totalItems > 0 && <MobileCartCount count={totalItems}>{totalItems}</MobileCartCount>}
    </MobileCartButtonInMenu>
  );
};

// Компонент логотипа с навигацией
const LogoWithNavigation = () => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/');
    // Прокручиваем страницу вверх с небольшой задержкой для корректной работы
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <Logo 
      whileHover={{ scale: 1.02 }}
      onClick={handleLogoClick}
    >
      <img src="/logo.png" alt="Стройэнергетика" />
    </Logo>
  );
};

// Компонент логотипа в футере с навигацией
const FooterLogoWithNavigation = () => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/');
    // Прокручиваем страницу вверх с небольшой задержкой для корректной работы
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <FooterLogo 
      as={motion.div}
      whileHover={{ scale: 1.02 }}
      onClick={handleLogoClick}
    >
      <img src="/logo.png" alt="Стройэнергетика" />
    </FooterLogo>
  );
};

// Модальное окно заказа звонка
const CallbackModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const CallbackModal = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CallbackModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`;

const CallbackModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const CallbackModalCloseButton = styled(motion.button)`
  background: none;
  border: none;
  color: #666666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #333333;
  }
`;

const CallbackForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CallbackFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CallbackLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
`;

const CallbackInput = styled.input`
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
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

const CallbackTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
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

const CallbackFormActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const CallbackSubmitButton = styled(motion.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  background: #2f5483;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const CallbackCancelButton = styled(motion.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  background: transparent;
  color: #2f5483;
  border: 1px solid #2f5483;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2f5483;
    color: white;
  }
`;

// Модальное окно заявки с загрузкой файлов
const ApplicationModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ApplicationModal = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ApplicationModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`;

const ApplicationModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const ApplicationModalCloseButton = styled(motion.button)`
  background: none;
  border: none;
  color: #666666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #333333;
  }
`;

const ApplicationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ApplicationFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ApplicationLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
`;

const ApplicationInput = styled.input`
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
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

const ApplicationTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
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

const FileUploadArea = styled.div`
  border: 2px dashed #e9ecef;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }
  
  &.drag-over {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.1);
  }
`;

const FileUploadText = styled.div`
  color: #666666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const FileUploadSubtext = styled.div`
  color: #999999;
  font-size: 0.85rem;
`;

const FileInput = styled.input`
  display: none;
`;

const FileList = styled.div`
  margin-top: 1rem;
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  border: 1px solid #e9ecef;
`;

const FileItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;

const FileItemName = styled.span`
  font-size: 0.9rem;
  color: #333333;
  font-weight: 500;
`;

const FileItemSize = styled.span`
  font-size: 0.8rem;
  color: #666666;
`;

const FileRemoveButton = styled(motion.button)`
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(220, 53, 69, 0.1);
  }
`;

const ApplicationFormActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ApplicationSubmitButton = styled(motion.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  background: #2f5483;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const ApplicationCancelButton = styled(motion.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  background: transparent;
  color: #2f5483;
  border: 1px solid #2f5483;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2f5483;
    color: white;
  }
`;

// Стили для модального окна прайс-листа
const PriceListModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const PriceListModal = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 0;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const PriceListModalHeader = styled.div`
  padding: 24px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 20px;
`;

const PriceListModalTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #212529;
`;

const PriceListModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6c757d;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    background: #f8f9fa;
    color: #495057;
  }
`;

const PriceListForm = styled.form`
  padding: 24px;
`;

const PriceListFormGroup = styled.div`
  margin-bottom: 20px;
`;

const PriceListLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #495057;
  font-size: 14px;
`;

const PriceListInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const PriceListTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const PriceListFormActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const PriceListSubmitButton = styled.button`
  padding: 12px 24px;
  background: #2f5483;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`;

const PriceListCancelButton = styled.button`
  padding: 12px 24px;
  background: #f8f9fa;
  color: #495057;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: #e9ecef;
    border-color: #adb5bd;
  }
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
  cursor: pointer;
  
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
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [callbackFormData, setCallbackFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [applicationFormData, setApplicationFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [applicationFiles, setApplicationFiles] = useState([]);
  const [isApplicationSubmitting, setIsApplicationSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  
  // Состояния для модального окна прайс-листа
  const [priceListModalOpen, setPriceListModalOpen] = useState(false);
  const [priceListFormData, setPriceListFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isPriceListSubmitting, setIsPriceListSubmitting] = useState(false);
  
  // Функция для закрытия мобильного меню
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileCatalogOpen(false);
  };

  // Функции для модального окна заказа звонка
  const openCallbackModal = () => {
    setCallbackModalOpen(true);
  };

  const closeCallbackModal = () => {
    setCallbackModalOpen(false);
    setCallbackFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleCallbackFormChange = (field, value) => {
    setCallbackFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      closeCallbackModal();
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    }, 2000);
  };

  // Функции для модального окна заявки
  const openApplicationModal = () => {
    setApplicationModalOpen(true);
  };

  const closeApplicationModal = () => {
    setApplicationModalOpen(false);
    setApplicationFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
    setApplicationFiles([]);
    setIsApplicationSubmitting(false);
    setDragOver(false);
  };

  const handleApplicationFormChange = (field, value) => {
    setApplicationFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      file: file,
      name: file.name,
      size: file.size,
      type: file.type
    }));
    setApplicationFiles(prev => [...prev, ...newFiles]);
  };

  const handleFileRemove = (fileId) => {
    setApplicationFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      file: file,
      name: file.name,
      size: file.size,
      type: file.type
    }));
    setApplicationFiles(prev => [...prev, ...newFiles]);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setIsApplicationSubmitting(true);
    
    // Имитация отправки формы с файлами
    setTimeout(() => {
      setIsApplicationSubmitting(false);
      closeApplicationModal();
      alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    }, 2000);
  };

  // Функции для модального окна прайс-листа
  const openPriceListModal = () => {
    setPriceListModalOpen(true);
  };

  const closePriceListModal = () => {
    setPriceListModalOpen(false);
    setPriceListFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      message: ''
    });
    setIsPriceListSubmitting(false);
  };

  const handlePriceListFormChange = (field, value) => {
    setPriceListFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePriceListSubmit = async (e) => {
    e.preventDefault();
    setIsPriceListSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsPriceListSubmitting(false);
      closePriceListModal();
      alert('Спасибо! Ваша заявка на прайс-лист отправлена. Мы свяжемся с вами в ближайшее время.');
    }, 2000);
  };
  
  // Функция для прокрутки вверх при переходе на главную
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Загружаем товары для поиска в шапке
    fetch('/catalog-products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Ошибка загрузки товаров:', error));
  }, []);





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
    <NotificationProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
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
                <LogoWithNavigation />
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
                <TopNavLink 
                  whileHover={{ scale: 1.02 }}
                  onClick={openPriceListModal}
                  style={{ cursor: 'pointer' }}
                >
                  Прайс-лист
                </TopNavLink>
                <TopNavLink whileHover={{ scale: 1.02 }}>Информация</TopNavLink>
                <TopNavLink whileHover={{ scale: 1.02 }}>Контакты</TopNavLink>
                <CallbackButtonSecondary 
                  whileHover={{ scale: 1.02 }}
                  onClick={openCallbackModal}
                >
                  <FontAwesomeIcon icon={faPhoneVolume} />
                  Заказать звонок
                </CallbackButtonSecondary>
                <CallbackButton 
                  whileHover={{ scale: 1.02 }}
                  onClick={openApplicationModal}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Отправить заявку
                </CallbackButton>
              </TopHeaderRight>
              <MobileButtonsContainer>
                <MobileCartButtonWithContext onOpenCart={() => setCartModalOpen(true)} />
                <MobileMenuButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </MobileMenuButton>
              </MobileButtonsContainer>
            </TopHeaderContent>
          </TopHeader>
          
          <BottomHeader>
            <BottomHeaderContent>
              <BottomHeaderLeft>
                <CatalogDropdown 
                  className="catalog-dropdown"
                  onMouseEnter={() => setCatalogDropdownOpen(true)}
                  onMouseLeave={() => setCatalogDropdownOpen(false)}
                >
                  <CatalogButton 
                    whileHover={{ scale: 1.02 }}
                  >
                    Каталог товаров
                    <FontAwesomeIcon icon={faBars} />
                  </CatalogButton>
                  <CatalogDropdownContent 
                    isOpen={catalogDropdownOpen}
                    onMouseEnter={() => setCatalogDropdownOpen(true)}
                    onMouseLeave={() => setCatalogDropdownOpen(false)}
                  >
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
                
                <BottomEmail href="mailto:info@stroienergetika.ru">
                  <FontAwesomeIcon icon={faEnvelope} />
                  info@stroienergetika.ru
                </BottomEmail>
                
                <BottomPhoneNumber href="tel:+79991234567">
                  <FontAwesomeIcon icon={faPhone} />
                  +7 (999) 123-45-67
                </BottomPhoneNumber>
                
                <CartButtonWithContext onOpenCart={() => setCartModalOpen(true)} />
              </BottomHeaderRight>
            </BottomHeaderContent>
          </BottomHeader>
        </Header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>

        <Footer>
          <FooterContent>
            <FooterColumn>
              <FooterLogoWithNavigation />
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
      
      <CartModalComponent 
        isOpen={cartModalOpen} 
        onClose={() => setCartModalOpen(false)} 
      />
      
      {/* Мобильное меню */}
              <MobileMenuOverlay
          isOpen={mobileMenuOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeMobileMenu}
        />
      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <MobileMenuHeader>
          <LogoWithNavigation />
          <MobileMenuCloseButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeMobileMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </MobileMenuCloseButton>
        </MobileMenuHeader>
        
        <MobileSearchContainer>
          <MobileSearchInput
            type="text"
            placeholder="Поиск товаров..."
            value={headerSearchQuery}
            onChange={(e) => setHeaderSearchQuery(e.target.value)}
          />
        </MobileSearchContainer>
        
        <MobileMenuSection>
          <MobileMenuTitle>Корзина</MobileMenuTitle>
          <MobileCartButtonInMenuWithContext onOpenCart={() => {
            setCartModalOpen(true);
            closeMobileMenu();
          }} />
        </MobileMenuSection>
        
        <MobileMenuSection>
          <MobileMenuTitle>Каталог</MobileMenuTitle>
          <MobileMenuDropdown>
            <MobileMenuDropdownButton
              onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
              whileHover={{ scale: 1.02 }}
            >
              Каталог товаров
              <FontAwesomeIcon 
                icon={faChevronDown} 
                style={{ 
                  fontSize: '0.8rem',
                  transform: mobileCatalogOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </MobileMenuDropdownButton>
            <MobileMenuDropdownContent isOpen={mobileCatalogOpen}>
              <MobileMenuDropdownItem href="/catalog" onClick={closeMobileMenu}>Все товары</MobileMenuDropdownItem>
              <MobileMenuDropdownItem href="/catalog?category=Однофазные счетчики" onClick={closeMobileMenu}>Однофазные счетчики</MobileMenuDropdownItem>
              <MobileMenuDropdownItem href="/catalog?category=Трехфазные счетчики" onClick={closeMobileMenu}>Трехфазные счетчики</MobileMenuDropdownItem>
              <MobileMenuDropdownItem href="/catalog?category=Устройства сбора и передачи данных" onClick={closeMobileMenu}>Устройства сбора и передачи данных</MobileMenuDropdownItem>
            </MobileMenuDropdownContent>
          </MobileMenuDropdown>
        </MobileMenuSection>
        
        <MobileMenuSection>
          <MobileMenuTitle>Клиентам</MobileMenuTitle>
          <MobileMenuItem href="/services/consultation" onClick={closeMobileMenu}>Консультация</MobileMenuItem>
          <MobileMenuItem href="/services/delivery" onClick={closeMobileMenu}>Доставка</MobileMenuItem>
          <MobileMenuItem href="/services/meter-verification" onClick={closeMobileMenu}>Поверка счетчиков</MobileMenuItem>
          <MobileMenuItem href="/services/transformer-verification" onClick={closeMobileMenu}>Поверка трансформаторов</MobileMenuItem>
          <MobileMenuItem href="/services/installation" onClick={closeMobileMenu}>Монтаж оборудования</MobileMenuItem>
          <MobileMenuItem href="/services/commissioning" onClick={closeMobileMenu}>Наладка</MobileMenuItem>
        </MobileMenuSection>
        
        <MobileMenuSection>
          <MobileMenuTitle>Информация</MobileMenuTitle>
          <MobileMenuItem 
            href="#" 
            onClick={() => {
              closeMobileMenu();
              openPriceListModal();
            }}
          >
            Прайс-лист
          </MobileMenuItem>
          <MobileMenuItem href="#" onClick={closeMobileMenu}>Информация</MobileMenuItem>
          <MobileMenuItem href="#" onClick={closeMobileMenu}>Контакты</MobileMenuItem>
        </MobileMenuSection>
        
        <MobileContactInfo>
          <MobileContactItem>
            <FontAwesomeIcon icon={faPhone} />
            +7 (999) 123-45-67
          </MobileContactItem>
          <MobileContactItem>
            <FontAwesomeIcon icon={faEnvelope} />
            info@stroienergetika.ru
          </MobileContactItem>
          <MobileContactItem>
            <FontAwesomeIcon icon={faClock} />
            Пн-Пт: 9:00 - 18:00
          </MobileContactItem>
        </MobileContactInfo>
        
        <MobileActionButtons>
          <MobileActionButton
            className="primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Отправить заявку
          </MobileActionButton>
          <MobileActionButton
            className="secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faPhoneVolume} />
            Заказать звонок
          </MobileActionButton>
        </MobileActionButtons>
      </MobileMenu>

      {/* Модальное окно заказа звонка */}
      {callbackModalOpen && (
        <CallbackModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeCallbackModal}
        >
          <CallbackModal
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CallbackModalHeader>
              <CallbackModalTitle>Заказать звонок</CallbackModalTitle>
              <CallbackModalCloseButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeCallbackModal}
              >
                ×
              </CallbackModalCloseButton>
            </CallbackModalHeader>

            <CallbackForm onSubmit={handleCallbackSubmit}>
              <CallbackFormGroup>
                <CallbackLabel>Ваше имя *</CallbackLabel>
                <CallbackInput
                  type="text"
                  placeholder="Введите ваше имя"
                  value={callbackFormData.name}
                  onChange={(e) => handleCallbackFormChange('name', e.target.value)}
                  required
                />
              </CallbackFormGroup>

              <CallbackFormGroup>
                <CallbackLabel>Номер телефона *</CallbackLabel>
                <CallbackInput
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={callbackFormData.phone}
                  onChange={(e) => handleCallbackFormChange('phone', e.target.value)}
                  required
                />
              </CallbackFormGroup>

              <CallbackFormGroup>
                <CallbackLabel>Email</CallbackLabel>
                <CallbackInput
                  type="email"
                  placeholder="your@email.com"
                  value={callbackFormData.email}
                  onChange={(e) => handleCallbackFormChange('email', e.target.value)}
                />
              </CallbackFormGroup>

              <CallbackFormGroup>
                <CallbackLabel>Сообщение</CallbackLabel>
                <CallbackTextarea
                  placeholder="Опишите ваш вопрос или задачу..."
                  value={callbackFormData.message}
                  onChange={(e) => handleCallbackFormChange('message', e.target.value)}
                />
              </CallbackFormGroup>

              <CallbackFormActions>
                <CallbackCancelButton
                  type="button"
                  onClick={closeCallbackModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Отмена
                </CallbackCancelButton>
                <CallbackSubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </CallbackSubmitButton>
              </CallbackFormActions>
            </CallbackForm>
          </CallbackModal>
        </CallbackModalOverlay>
      )}

      {/* Модальное окно заявки с загрузкой файлов */}
      {applicationModalOpen && (
        <ApplicationModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeApplicationModal}
        >
          <ApplicationModal
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ApplicationModalHeader>
              <ApplicationModalTitle>Отправить заявку</ApplicationModalTitle>
              <ApplicationModalCloseButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeApplicationModal}
              >
                ×
              </ApplicationModalCloseButton>
            </ApplicationModalHeader>

            <ApplicationForm onSubmit={handleApplicationSubmit}>
              <ApplicationFormGroup>
                <ApplicationLabel>Ваше имя *</ApplicationLabel>
                <ApplicationInput
                  type="text"
                  placeholder="Введите ваше имя"
                  value={applicationFormData.name}
                  onChange={(e) => handleApplicationFormChange('name', e.target.value)}
                  required
                />
              </ApplicationFormGroup>

              <ApplicationFormGroup>
                <ApplicationLabel>Компания</ApplicationLabel>
                <ApplicationInput
                  type="text"
                  placeholder="Название вашей компании"
                  value={applicationFormData.company}
                  onChange={(e) => handleApplicationFormChange('company', e.target.value)}
                />
              </ApplicationFormGroup>

              <ApplicationFormGroup>
                <ApplicationLabel>Номер телефона *</ApplicationLabel>
                <ApplicationInput
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={applicationFormData.phone}
                  onChange={(e) => handleApplicationFormChange('phone', e.target.value)}
                  required
                />
              </ApplicationFormGroup>

              <ApplicationFormGroup>
                <ApplicationLabel>Email *</ApplicationLabel>
                <ApplicationInput
                  type="email"
                  placeholder="your@email.com"
                  value={applicationFormData.email}
                  onChange={(e) => handleApplicationFormChange('email', e.target.value)}
                  required
                />
              </ApplicationFormGroup>

              <ApplicationFormGroup>
                <ApplicationLabel>Тема заявки *</ApplicationLabel>
                <ApplicationInput
                  type="text"
                  placeholder="Кратко опишите тему заявки"
                  value={applicationFormData.subject}
                  onChange={(e) => handleApplicationFormChange('subject', e.target.value)}
                  required
                />
              </ApplicationFormGroup>

              <ApplicationFormGroup>
                <ApplicationLabel>Описание *</ApplicationLabel>
                <ApplicationTextarea
                  placeholder="Подробно опишите вашу задачу, требования или вопросы..."
                  value={applicationFormData.message}
                  onChange={(e) => handleApplicationFormChange('message', e.target.value)}
                  required
                />
              </ApplicationFormGroup>

              <ApplicationFormGroup>
                <ApplicationLabel>Прикрепить файлы</ApplicationLabel>
                <FileUploadArea
                  className={dragOver ? 'drag-over' : ''}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('file-input').click()}
                >
                  <FileUploadText>
                    Перетащите файлы сюда или нажмите для выбора
                  </FileUploadText>
                  <FileUploadSubtext>
                    Поддерживаемые форматы: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, ZIP
                  </FileUploadSubtext>
                  <FileInput
                    id="file-input"
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"
                  />
                </FileUploadArea>

                {applicationFiles.length > 0 && (
                  <FileList>
                    {applicationFiles.map((file) => (
                      <FileItem key={file.id}>
                        <FileItemInfo>
                          <FileItemName>{file.name}</FileItemName>
                          <FileItemSize>({formatFileSize(file.size)})</FileItemSize>
                        </FileItemInfo>
                        <FileRemoveButton
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleFileRemove(file.id)}
                        >
                          ×
                        </FileRemoveButton>
                      </FileItem>
                    ))}
                  </FileList>
                )}
              </ApplicationFormGroup>

              <ApplicationFormActions>
                <ApplicationCancelButton
                  type="button"
                  onClick={closeApplicationModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Отмена
                </ApplicationCancelButton>
                <ApplicationSubmitButton
                  type="submit"
                  disabled={isApplicationSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isApplicationSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </ApplicationSubmitButton>
              </ApplicationFormActions>
            </ApplicationForm>
          </ApplicationModal>
        </ApplicationModalOverlay>
      )}

      {/* Модальное окно прайс-листа */}
      {priceListModalOpen && (
        <PriceListModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePriceListModal}
        >
          <PriceListModal
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <PriceListModalHeader>
              <PriceListModalTitle>Заявка на прайс-лист</PriceListModalTitle>
              <PriceListModalCloseButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closePriceListModal}
              >
                ×
              </PriceListModalCloseButton>
            </PriceListModalHeader>

            <PriceListForm onSubmit={handlePriceListSubmit}>
              <PriceListFormGroup>
                <PriceListLabel>Ваше имя *</PriceListLabel>
                <PriceListInput
                  type="text"
                  placeholder="Введите ваше имя"
                  value={priceListFormData.name}
                  onChange={(e) => handlePriceListFormChange('name', e.target.value)}
                  required
                />
              </PriceListFormGroup>

              <PriceListFormGroup>
                <PriceListLabel>Компания</PriceListLabel>
                <PriceListInput
                  type="text"
                  placeholder="Название вашей компании"
                  value={priceListFormData.company}
                  onChange={(e) => handlePriceListFormChange('company', e.target.value)}
                />
              </PriceListFormGroup>

              <PriceListFormGroup>
                <PriceListLabel>Номер телефона *</PriceListLabel>
                <PriceListInput
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={priceListFormData.phone}
                  onChange={(e) => handlePriceListFormChange('phone', e.target.value)}
                  required
                />
              </PriceListFormGroup>

              <PriceListFormGroup>
                <PriceListLabel>Email *</PriceListLabel>
                <PriceListInput
                  type="email"
                  placeholder="your@email.com"
                  value={priceListFormData.email}
                  onChange={(e) => handlePriceListFormChange('email', e.target.value)}
                  required
                />
              </PriceListFormGroup>

              <PriceListFormGroup>
                <PriceListLabel>Дополнительная информация</PriceListLabel>
                <PriceListTextarea
                  placeholder="Укажите интересующие вас категории товаров или особые требования..."
                  value={priceListFormData.message}
                  onChange={(e) => handlePriceListFormChange('message', e.target.value)}
                />
              </PriceListFormGroup>

              <PriceListFormActions>
                <PriceListCancelButton
                  type="button"
                  onClick={closePriceListModal}
                >
                  Отмена
                </PriceListCancelButton>
                <PriceListSubmitButton
                  type="submit"
                  disabled={isPriceListSubmitting}
                >
                  {isPriceListSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </PriceListSubmitButton>
              </PriceListFormActions>
            </PriceListForm>
          </PriceListModal>
        </PriceListModalOverlay>
      )}
    </Router>
    </CartProvider>
    </NotificationProvider>
  );
}

export default App; 