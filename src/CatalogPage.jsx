import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faSearch, faShoppingCart, faFilter, faSort, faInfoCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';

const CatalogContainer = styled.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 200px;
`;



// Основной контент каталога
const CatalogContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const CatalogHeader = styled.div`
  margin-bottom: 2rem;
`;

const CatalogTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  color: #000000;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
`;

const CatalogSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666666;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;

// Фильтры и сортировка
const FiltersSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem;
  }
`;

const DesktopFilters = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FiltersLeft = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FilterButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? 'rgba(47, 84, 131, 0.15)' : 'rgba(47, 84, 131, 0.05)'};
  border: 1px solid ${props => props.active ? 'rgba(47, 84, 131, 0.3)' : 'rgba(47, 84, 131, 0.1)'};
  border-radius: 8px;
  color: #2f5483;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    transform: translateY(-1px);
  }
`;

const SortDropdown = styled.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SortButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(47, 84, 131, 0.05);
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 8px;
  color: #2f5483;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    transform: translateY(-1px);
  }
`;

const SortDropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.15);
  padding: 0.5rem;
  min-width: 200px;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
`;

const SortOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.6rem 1rem;
  background: none;
  border: none;
  color: #666666;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    color: #2f5483;
  }
  
  &.active {
    background: rgba(47, 84, 131, 0.15);
    color: #2f5483;
    font-weight: 500;
  }
`;

// Мобильные фильтры
const MobileFiltersButton = styled(motion.button)`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 0.6rem 1rem;
  background: ${props => props.active ? 'rgba(47, 84, 131, 0.15)' : 'rgba(47, 84, 131, 0.05)'};
  border: 1px solid ${props => props.active ? 'rgba(47, 84, 131, 0.3)' : 'rgba(47, 84, 131, 0.1)'};
  border-radius: 6px;
  color: #2f5483;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 80px;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  &:hover {
    background: rgba(47, 84, 131, 0.1);
    transform: translateY(-1px);
  }
`;

const MobileFiltersOverlay = styled(motion.div)`
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

const MobileFiltersMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 2001;
  padding: 2rem;
  overflow-y: auto;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileFiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`;

const MobileFiltersTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const MobileFiltersCloseButton = styled(motion.button)`
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

const MobileFilterSection = styled.div`
  margin-bottom: 2rem;
`;

const MobileFilterSectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
`;

const MobileFilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  cursor: pointer;
  font-size: 1rem;
  color: #333333;
  transition: color 0.3s ease;
  border-bottom: 1px solid #f5f5f5;
  
  &:hover {
    color: #2f5483;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileFilterCheckbox = styled.input`
  margin: 0;
  width: 18px;
  height: 18px;
  accent-color: #2f5483;
`;

const MobilePriceRange = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

const MobilePriceInput = styled.input`
  flex: 1;
  padding: 0.8rem;
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

const MobileFiltersActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`;

const MobileFilterActionButton = styled(motion.button)`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
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
`;

const FilterDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const FilterDropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.15);
  padding: 1rem;
  min-width: 200px;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
`;

const FilterGroup = styled.div`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterGroupTitle = styled.div`
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0;
  cursor: pointer;
  font-size: 0.85rem;
  color: #666666;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2f5483;
  }
`;

const FilterCheckbox = styled.input`
  margin: 0;
`;

const PriceRange = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PriceInput = styled.input`
  width: 80px;
  padding: 0.3rem 0.5rem;
  border: 1px solid rgba(47, 84, 131, 0.2);
  border-radius: 4px;
  font-size: 0.8rem;
  color: #2f5483;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
  }
`;

const ClearFiltersButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  background: rgba(255, 71, 87, 0.1);
  border: 1px solid rgba(255, 71, 87, 0.2);
  border-radius: 6px;
  color: #ff4757;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 71, 87, 0.15);
  }
`;

const ActiveFilters = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const ActiveFilterTag = styled.span`
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const RemoveFilterButton = styled.button`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  
  &:hover {
    color: #ff4757;
  }
`;



// Сетка товаров
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ProductCard = styled(motion.div)`
  background: #ffffff;
  border: 1px solid rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(47, 84, 131, 0.08);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
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
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(47, 84, 131, 0.15);
    border-color: rgba(47, 84, 131, 0.2);
    
    &:before {
      opacity: 1;
    }
  }
`;

const ProductImage = styled.div`
  position: relative;
  height: 200px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
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
  left: 1rem;
  background: #2f5483;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;



const ProductInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductCategory = styled.div`
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 300;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.8rem;
  line-height: 1.4;
`;

const ProductDescription = styled.p`
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 300;
  max-height: 4.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-word;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 1.5rem;
    background: linear-gradient(to right, transparent, #ffffff);
    pointer-events: none;
  }
`;

const ProductSpecs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SpecTag = styled.span`
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 400;
`;



const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: auto;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
`;

const OriginalPrice = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #999999;
  text-decoration: line-through;
  margin-right: 0.5rem;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #dc3545;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: auto;
`;

const ProductButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

const AddToCartButton = styled(motion.button)`
  flex: 1;
  background: #2f5483;
  border: none;
  padding: 0.8rem;
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
  
  &:hover {
    background: #3a6294;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const DetailsButton = styled(motion.button)`
  flex: 1;
  background: transparent;
  border: 1px solid #2f5483;
  padding: 0.8rem;
  color: #2f5483;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Кнопка "Показать больше"
const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const LoadMoreButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: 2px solid #2f5483;
  background: white;
  color: #2f5483;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// Плашка "Заказ под заказ"
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

function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedProducts, setDisplayedProducts] = useState(12);
  const [sortBy, setSortBy] = useState('name');
  const productsPerPage = 12;
  const { addToCart } = useCart();
  
  // Состояние фильтров
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: { min: '', max: '' },
    phases: [],
    voltage: [],
    accuracy: []
  });
  
  // Состояние поискового запроса
  const [searchQuery, setSearchQuery] = useState('');
  

  
  // Состояние открытых дропдаунов
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Закрытие дропдаунов при клике вне их
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.filter-dropdown') && !event.target.closest('.sort-dropdown')) {
        setOpenDropdown(null);
        setSortDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Закрытие мобильных фильтров при клике на оверлей
  const closeMobileFilters = () => {
    setMobileFiltersOpen(false);
  };

  useEffect(() => {
    // Загружаем товары из JSON файла
    fetch('/catalog-products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка загрузки товаров:', error);
        setLoading(false);
      });
  }, []);

  // Обработка параметров URL при загрузке страницы
  useEffect(() => {
    const category = searchParams.get('category');
    const brand = searchParams.get('brand');
    const search = searchParams.get('search');
    
    if (category || brand || search) {
      const newFilters = {
        categories: category ? [category] : [],
        brands: brand ? [brand] : [],
        priceRange: { min: '', max: '' },
        phases: [],
        voltage: [],
        accuracy: []
      };
      
      setFilters(newFilters);
      if (search) {
        setSearchQuery(search);
      }
      setDisplayedProducts(12); // Сбрасываем количество отображаемых товаров
    }
  }, [searchParams]);

  // Сброс количества отображаемых товаров при изменении фильтров
  useEffect(() => {
    setDisplayedProducts(12);
  }, [filters]);

  // Функции для работы с фильтрами
  const handleFilterChange = (filterType, value, isChecked) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (filterType === 'priceRange') {
        newFilters.priceRange = { ...prev.priceRange, ...value };
      } else {
        if (isChecked) {
          newFilters[filterType] = [...prev[filterType], value];
        } else {
          newFilters[filterType] = prev[filterType].filter(item => item !== value);
        }
      }
      
      return newFilters;
    });
    setCurrentPage(1); // Сбрасываем на первую страницу при изменении фильтров
  };

  // Обновление URL при изменении фильтров
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.categories.length > 0) {
      params.set('category', filters.categories[0]); // Берем первую категорию
    }
    if (filters.brands.length > 0) {
      params.set('brand', filters.brands[0]); // Берем первый бренд
    }
    
    setSearchParams(params);
  }, [filters.categories, filters.brands, setSearchParams]);

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: { min: '', max: '' },
      phases: [],
      voltage: [],
      accuracy: []
    });
    setSearchQuery('');
    setSearchParams({}); // Очищаем параметры URL
    setDisplayedProducts(12);
  };

  const removeFilter = (filterType, value) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      if (filterType === 'priceRange') {
        newFilters.priceRange = { min: '', max: '' };
      } else {
        newFilters[filterType] = prev[filterType].filter(item => item !== value);
      }
      return newFilters;
    });
    setCurrentPage(1);
  };



  // Функция фильтрации товаров
  const filterProducts = (products) => {
    return products.filter(product => {
      // Поисковый фильтр
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        
        if (!matchesName && !matchesBrand && !matchesCategory) {
          return false;
        }
      }
      
      // Фильтр по категориям
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }
      
      // Фильтр по брендам
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }
      
      // Фильтр по цене
      if (filters.priceRange.min && product.price < parseInt(filters.priceRange.min)) {
        return false;
      }
      if (filters.priceRange.max && product.price > parseInt(filters.priceRange.max)) {
        return false;
      }
      
      // Фильтр по количеству фаз
      if (filters.phases.length > 0 && !filters.phases.includes(product.specifications.phases)) {
        return false;
      }
      
      // Фильтр по напряжению
      if (filters.voltage.length > 0 && !filters.voltage.includes(product.specifications.voltage)) {
        return false;
      }
      
      // Фильтр по классу точности
      if (filters.accuracy.length > 0 && !filters.accuracy.includes(product.specifications.accuracy)) {
        return false;
      }
      
      return true;
    });
  };

  // Получение уникальных значений для фильтров
  const getUniqueValues = (field) => {
    const values = products.map(product => {
      if (field === 'specifications.phases') return product.specifications.phases;
      if (field === 'specifications.voltage') return product.specifications.voltage;
      if (field === 'specifications.accuracy') return product.specifications.accuracy;
      return product[field];
    });
    
    // Фильтруем пустые значения, значения "нет" и "не требуется"
    const filteredValues = values.filter(value => 
      value && 
      value !== '' && 
      value !== 'нет' && 
      value !== 'не требуется' &&
      value !== 'ТМ выход' // Исключаем простые интерфейсы
    );
    
    return [...new Set(filteredValues)].sort();
  };

  // Фильтрация и сортировка товаров
  const filteredAndSortedProducts = filterProducts([...products]).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Отображение товаров с кнопкой "Показать больше"
  const currentProducts = filteredAndSortedProducts.slice(0, displayedProducts);
  const hasMoreProducts = displayedProducts < filteredAndSortedProducts.length;

  // Проверка наличия активных фильтров
  const hasActiveFilters = () => {
    return searchQuery.trim() ||
           filters.categories.length > 0 || 
           filters.brands.length > 0 || 
           filters.priceRange.min || 
           filters.priceRange.max || 
           filters.phases.length > 0 || 
           filters.voltage.length > 0 || 
           filters.accuracy.length > 0;
  };

  const handleLoadMore = () => {
    setDisplayedProducts(prev => prev + productsPerPage);
  };

  const handleCustomOrder = () => {
    // Здесь можно добавить логику для открытия формы заказа
    // Например, открыть модальное окно или перейти на страницу заказа
    alert('Функция заказа под заказ будет добавлена позже. Свяжитесь с нами по телефону для уточнения деталей.');
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setSortDropdownOpen(false);
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'name':
        return 'По названию';
      case 'price-asc':
        return 'По цене (возрастание)';
      case 'price-desc':
        return 'По цене (убывание)';
      default:
        return 'По названию';
    }
  };

  // Функция для генерации заголовка в зависимости от фильтров
  const getCatalogTitle = () => {
    if (filters.categories.length === 1 && filters.brands.length === 0) {
      return `${filters.categories[0]}`;
    }
    if (filters.categories.length === 0 && filters.brands.length === 1) {
      return `Счетчики ${filters.brands[0]}`;
    }
    if (filters.categories.length === 1 && filters.brands.length === 1) {
      return `${filters.categories[0]} ${filters.brands[0]}`;
    }
    if (filters.categories.length > 1) {
      return `Категории: ${filters.categories.join(', ')}`;
    }
    if (filters.brands.length > 1) {
      return `Бренды: ${filters.brands.join(', ')}`;
    }
    if (filters.priceRange.min || filters.priceRange.max) {
      let priceText = 'По цене';
      if (filters.priceRange.min && filters.priceRange.max) {
        priceText = `От ${filters.priceRange.min} до ${filters.priceRange.max} ₽`;
      } else if (filters.priceRange.min) {
        priceText = `От ${filters.priceRange.min} ₽`;
      } else if (filters.priceRange.max) {
        priceText = `До ${filters.priceRange.max} ₽`;
      }
      return priceText;
    }
    if (filters.phases.length > 0 || filters.voltage.length > 0 || filters.accuracy.length > 0) {
      const specs = [];
      if (filters.phases.length > 0) specs.push(`${filters.phases.join(', ')} фаза`);
      if (filters.voltage.length > 0) specs.push(filters.voltage.join(', '));
      if (filters.accuracy.length > 0) specs.push(`Класс ${filters.accuracy.join(', ')}`);
      return specs.join(', ');
    }
    return 'Каталог';
  };

  // Обновление заголовка страницы при изменении фильтров
  useEffect(() => {
    const title = getCatalogTitle();
    const pageTitle = hasActiveFilters() 
      ? `${title} - Счетчики электроэнергии | Стройэнергетика`
      : 'Каталог счетчиков электроэнергии | Стройэнергетика';
    
    document.title = pageTitle;
  }, [filters, hasActiveFilters]);

  if (loading) {
    return (
      <CatalogContainer>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh',
          fontSize: '1.2rem',
          color: '#2f5483'
        }}>
          Загрузка товаров...
        </div>
      </CatalogContainer>
    );
  }

  return (
    <CatalogContainer>

      <CatalogContent>
        <CatalogHeader>
          <CatalogTitle>{getCatalogTitle()}</CatalogTitle>
          <CatalogSubtitle>
            {hasActiveFilters() 
              ? `Найдено ${filteredAndSortedProducts.length} товаров`
              : 'Широкий выбор счетчиков электроэнергии от ведущих производителей с гарантией качества'
            }
          </CatalogSubtitle>
          

        </CatalogHeader>

        <FiltersSection>
          <DesktopFilters>
            <FilterDropdown className="filter-dropdown">
              <FilterButton 
                active={filters.categories.length > 0 || filters.brands.length > 0}
                onClick={() => setOpenDropdown(openDropdown === 'main' ? null : 'main')}
                whileHover={{ scale: 1.02 }}
              >
                <FontAwesomeIcon icon={faFilter} />
                Категории и бренды
              </FilterButton>
              <FilterDropdownContent isOpen={openDropdown === 'main'}>
                <FilterGroup>
                  <FilterGroupTitle>Категории</FilterGroupTitle>
                  {getUniqueValues('category').map(category => (
                    <FilterOption key={category}>
                      <FilterCheckbox
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={(e) => handleFilterChange('categories', category, e.target.checked)}
                      />
                      {category}
                    </FilterOption>
                  ))}
                </FilterGroup>
                <FilterGroup>
                  <FilterGroupTitle>Бренды</FilterGroupTitle>
                  {getUniqueValues('brand').map(brand => (
                    <FilterOption key={brand}>
                      <FilterCheckbox
                        type="checkbox"
                        checked={filters.brands.includes(brand)}
                        onChange={(e) => handleFilterChange('brands', brand, e.target.checked)}
                      />
                      {brand}
                    </FilterOption>
                  ))}
                </FilterGroup>
              </FilterDropdownContent>
            </FilterDropdown>

            <FilterDropdown className="filter-dropdown">
              <FilterButton 
                active={filters.priceRange.min || filters.priceRange.max}
                onClick={() => setOpenDropdown(openDropdown === 'price' ? null : 'price')}
                whileHover={{ scale: 1.02 }}
              >
                <FontAwesomeIcon icon={faFilter} />
                Цена
              </FilterButton>
              <FilterDropdownContent isOpen={openDropdown === 'price'}>
                <FilterGroup>
                  <FilterGroupTitle>Диапазон цен</FilterGroupTitle>
                  <PriceRange>
                    <PriceInput
                      type="number"
                      placeholder="От"
                      value={filters.priceRange.min}
                      onChange={(e) => handleFilterChange('priceRange', { min: e.target.value })}
                    />
                    <span>-</span>
                    <PriceInput
                      type="number"
                      placeholder="До"
                      value={filters.priceRange.max}
                      onChange={(e) => handleFilterChange('priceRange', { max: e.target.value })}
                    />
                  </PriceRange>
                </FilterGroup>
              </FilterDropdownContent>
            </FilterDropdown>

            <FilterDropdown className="filter-dropdown">
              <FilterButton 
                active={filters.phases.length > 0 || filters.voltage.length > 0 || filters.accuracy.length > 0}
                onClick={() => setOpenDropdown(openDropdown === 'specs' ? null : 'specs')}
                whileHover={{ scale: 1.02 }}
              >
                <FontAwesomeIcon icon={faFilter} />
                Характеристики
              </FilterButton>
              <FilterDropdownContent isOpen={openDropdown === 'specs'}>
                <FilterGroup>
                  <FilterGroupTitle>Количество фаз</FilterGroupTitle>
                  {getUniqueValues('specifications.phases').map(phase => (
                    <FilterOption key={phase}>
                      <FilterCheckbox
                        type="checkbox"
                        checked={filters.phases.includes(phase)}
                        onChange={(e) => handleFilterChange('phases', phase, e.target.checked)}
                      />
                      {phase} фаза
                    </FilterOption>
                  ))}
                </FilterGroup>
                <FilterGroup>
                  <FilterGroupTitle>Напряжение</FilterGroupTitle>
                  {getUniqueValues('specifications.voltage').map(voltage => (
                    <FilterOption key={voltage}>
                      <FilterCheckbox
                        type="checkbox"
                        checked={filters.voltage.includes(voltage)}
                        onChange={(e) => handleFilterChange('voltage', voltage, e.target.checked)}
                      />
                      {voltage}
                    </FilterOption>
                  ))}
                </FilterGroup>
                <FilterGroup>
                  <FilterGroupTitle>Класс точности</FilterGroupTitle>
                  {getUniqueValues('specifications.accuracy').map(accuracy => (
                    <FilterOption key={accuracy}>
                      <FilterCheckbox
                        type="checkbox"
                        checked={filters.accuracy.includes(accuracy)}
                        onChange={(e) => handleFilterChange('accuracy', accuracy, e.target.checked)}
                      />
                      {accuracy}
                    </FilterOption>
                  ))}
                </FilterGroup>
              </FilterDropdownContent>
            </FilterDropdown>

            {hasActiveFilters() && (
              <ClearFiltersButton onClick={clearAllFilters} whileHover={{ scale: 1.02 }}>
                Очистить все
              </ClearFiltersButton>
            )}
          </DesktopFilters>

          <MobileFiltersButton
            active={hasActiveFilters()}
            onClick={() => setMobileFiltersOpen(true)}
            whileHover={{ scale: 1.02 }}
          >
            <FontAwesomeIcon icon={faFilter} />
            Фильтры
          </MobileFiltersButton>

          <SortDropdown className="sort-dropdown">
            <SortButton
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              whileHover={{ scale: 1.02 }}
            >
              <FontAwesomeIcon icon={faSort} />
              {getSortLabel()}
            </SortButton>
            <SortDropdownContent isOpen={sortDropdownOpen}>
              <SortOption
                className={sortBy === 'name' ? 'active' : ''}
                onClick={() => handleSortChange('name')}
              >
                По названию
              </SortOption>
              <SortOption
                className={sortBy === 'price-asc' ? 'active' : ''}
                onClick={() => handleSortChange('price-asc')}
              >
                По цене (возрастание)
              </SortOption>
              <SortOption
                className={sortBy === 'price-desc' ? 'active' : ''}
                onClick={() => handleSortChange('price-desc')}
              >
                По цене (убывание)
              </SortOption>
            </SortDropdownContent>
          </SortDropdown>
        </FiltersSection>

        {hasActiveFilters() && (
          <ActiveFilters>
            {filters.categories.map(category => (
              <ActiveFilterTag key={`category-${category}`}>
                Категория: {category}
                <RemoveFilterButton onClick={() => removeFilter('categories', category)}>×</RemoveFilterButton>
              </ActiveFilterTag>
            ))}
            {filters.brands.map(brand => (
              <ActiveFilterTag key={`brand-${brand}`}>
                Бренд: {brand}
                <RemoveFilterButton onClick={() => removeFilter('brands', brand)}>×</RemoveFilterButton>
              </ActiveFilterTag>
            ))}
            {filters.priceRange.min && (
              <ActiveFilterTag key="price-min">
                Цена от: {filters.priceRange.min} ₽
                <RemoveFilterButton onClick={() => removeFilter('priceRange')}>×</RemoveFilterButton>
              </ActiveFilterTag>
            )}
            {filters.priceRange.max && (
              <ActiveFilterTag key="price-max">
                Цена до: {filters.priceRange.max} ₽
                <RemoveFilterButton onClick={() => removeFilter('priceRange')}>×</RemoveFilterButton>
              </ActiveFilterTag>
            )}
            {filters.phases.map(phase => (
              <ActiveFilterTag key={`phase-${phase}`}>
                {phase} фаза
                <RemoveFilterButton onClick={() => removeFilter('phases', phase)}>×</RemoveFilterButton>
              </ActiveFilterTag>
            ))}
            {filters.voltage.map(voltage => (
              <ActiveFilterTag key={`voltage-${voltage}`}>
                {voltage}
                <RemoveFilterButton onClick={() => removeFilter('voltage', voltage)}>×</RemoveFilterButton>
              </ActiveFilterTag>
            ))}
            {filters.accuracy.map(accuracy => (
              <ActiveFilterTag key={`accuracy-${accuracy}`}>
                Класс {accuracy}
                <RemoveFilterButton onClick={() => removeFilter('accuracy', accuracy)}>×</RemoveFilterButton>
              </ActiveFilterTag>
            ))}
          </ActiveFilters>
        )}

        <ProductsGrid>
          {currentProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <ProductImage>
                {product.mainImage || product.image ? (
                  <img 
                    src={product.mainImage || `/images/products/${product.image}`} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    color: '#2f5483',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                    {product.brand}
                  </div>
                )}
                <ProductBadge>{product.brand}</ProductBadge>
                {product.discount && (
                  <DiscountBadge>-{product.discount}%</DiscountBadge>
                )}
              </ProductImage>
              
              <ProductInfo>
                <ProductCategory>{product.category}</ProductCategory>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                
                <ProductSpecs>
                  {/* Стандартные характеристики для счетчиков */}
                  {product.specifications.phases && product.specifications.phases !== 'нет' && (
                    <SpecTag>{product.specifications.phases} фаза</SpecTag>
                  )}
                  {product.specifications.voltage && product.specifications.voltage !== 'нет' && (
                    <SpecTag>{product.specifications.voltage}</SpecTag>
                  )}
                  {product.specifications.accuracy && product.specifications.accuracy !== 'нет' && (
                    <SpecTag>{product.specifications.accuracy} класс</SpecTag>
                  )}
                  {product.specifications.tariffs && product.specifications.tariffs !== 'однотарифный' && (
                    <SpecTag>Многотарифный</SpecTag>
                  )}
                  
                  {/* Специальные характеристики для устройств сбора данных */}
                  {product.category === 'Устройства сбора и передачи данных' && (
                    <>
                      {product.specifications.power_3phase && (
                        <SpecTag>3×230/400В</SpecTag>
                      )}
                      {product.specifications.interfaces && typeof product.specifications.interfaces === 'object' && (
                        <SpecTag>Wi-Fi, LTE</SpecTag>
                      )}
                      {product.specifications.temperature && (
                        <SpecTag>-40...+55°C</SpecTag>
                      )}
                    </>
                  )}
                </ProductSpecs>
                

                
                <ProductPrice>
                  {product.originalPrice ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <OriginalPrice>{product.originalPrice.toLocaleString()} ₽</OriginalPrice>
                      <Price>{product.price.toLocaleString()} ₽</Price>
                    </div>
                  ) : (
                    <Price>{product.price.toLocaleString()} ₽</Price>
                  )}
                </ProductPrice>
                
                <ProductButtons>
                  <AddToCartButton
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    В корзину
                  </AddToCartButton>
                  
                  <DetailsButton
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Подробнее
                  </DetailsButton>
                </ProductButtons>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>

        {hasMoreProducts && (
          <LoadMoreContainer>
            <LoadMoreButton
              onClick={handleLoadMore}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Показать еще {Math.min(productsPerPage, filteredAndSortedProducts.length - displayedProducts)} товаров
            </LoadMoreButton>
          </LoadMoreContainer>
        )}

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
              onClick={handleCustomOrder}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Купить под заказ
            </CustomOrderButton>
          </CustomOrderContent>
        </CustomOrderBanner>
      </CatalogContent>

      {/* Мобильное меню фильтров */}
      <MobileFiltersOverlay
        isOpen={mobileFiltersOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileFiltersOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={closeMobileFilters}
      />
      <MobileFiltersMenu
        initial={{ x: '-100%' }}
        animate={{ x: mobileFiltersOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <MobileFiltersHeader>
          <MobileFiltersTitle>Фильтры</MobileFiltersTitle>
          <MobileFiltersCloseButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={closeMobileFilters}
          >
            ×
          </MobileFiltersCloseButton>
        </MobileFiltersHeader>

        <MobileFilterSection>
          <MobileFilterSectionTitle>Категории</MobileFilterSectionTitle>
          {getUniqueValues('category').map(category => (
            <MobileFilterOption key={category}>
              <MobileFilterCheckbox
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={(e) => handleFilterChange('categories', category, e.target.checked)}
              />
              {category}
            </MobileFilterOption>
          ))}
        </MobileFilterSection>

        <MobileFilterSection>
          <MobileFilterSectionTitle>Бренды</MobileFilterSectionTitle>
          {getUniqueValues('brand').map(brand => (
            <MobileFilterOption key={brand}>
              <MobileFilterCheckbox
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={(e) => handleFilterChange('brands', brand, e.target.checked)}
              />
              {brand}
            </MobileFilterOption>
          ))}
        </MobileFilterSection>

        <MobileFilterSection>
          <MobileFilterSectionTitle>Цена</MobileFilterSectionTitle>
          <MobilePriceRange>
            <MobilePriceInput
              type="number"
              placeholder="От"
              value={filters.priceRange.min}
              onChange={(e) => handleFilterChange('priceRange', { min: e.target.value })}
            />
            <span>-</span>
            <MobilePriceInput
              type="number"
              placeholder="До"
              value={filters.priceRange.max}
              onChange={(e) => handleFilterChange('priceRange', { max: e.target.value })}
            />
          </MobilePriceRange>
        </MobileFilterSection>

        <MobileFilterSection>
          <MobileFilterSectionTitle>Количество фаз</MobileFilterSectionTitle>
          {getUniqueValues('specifications.phases').map(phase => (
            <MobileFilterOption key={phase}>
              <MobileFilterCheckbox
                type="checkbox"
                checked={filters.phases.includes(phase)}
                onChange={(e) => handleFilterChange('phases', phase, e.target.checked)}
              />
              {phase} фаза
            </MobileFilterOption>
          ))}
        </MobileFilterSection>

        <MobileFilterSection>
          <MobileFilterSectionTitle>Напряжение</MobileFilterSectionTitle>
          {getUniqueValues('specifications.voltage').map(voltage => (
            <MobileFilterOption key={voltage}>
              <MobileFilterCheckbox
                type="checkbox"
                checked={filters.voltage.includes(voltage)}
                onChange={(e) => handleFilterChange('voltage', voltage, e.target.checked)}
              />
              {voltage}
            </MobileFilterOption>
          ))}
        </MobileFilterSection>

        <MobileFilterSection>
          <MobileFilterSectionTitle>Класс точности</MobileFilterSectionTitle>
          {getUniqueValues('specifications.accuracy').map(accuracy => (
            <MobileFilterOption key={accuracy}>
              <MobileFilterCheckbox
                type="checkbox"
                checked={filters.accuracy.includes(accuracy)}
                onChange={(e) => handleFilterChange('accuracy', accuracy, e.target.checked)}
              />
              Класс {accuracy}
            </MobileFilterOption>
          ))}
        </MobileFilterSection>

        <MobileFilterSection>
          <MobileFilterSectionTitle>Сортировка</MobileFilterSectionTitle>
          <MobileFilterOption>
            <MobileFilterCheckbox
              type="radio"
              name="sort"
              checked={sortBy === 'name'}
              onChange={() => handleSortChange('name')}
            />
            По названию
          </MobileFilterOption>
          <MobileFilterOption>
            <MobileFilterCheckbox
              type="radio"
              name="sort"
              checked={sortBy === 'price-asc'}
              onChange={() => handleSortChange('price-asc')}
            />
            По цене (возрастание)
          </MobileFilterOption>
          <MobileFilterOption>
            <MobileFilterCheckbox
              type="radio"
              name="sort"
              checked={sortBy === 'price-desc'}
              onChange={() => handleSortChange('price-desc')}
            />
            По цене (убывание)
          </MobileFilterOption>
        </MobileFilterSection>

        <MobileFiltersActions>
          <MobileFilterActionButton
            className="secondary"
            onClick={clearAllFilters}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Очистить все
          </MobileFilterActionButton>
          <MobileFilterActionButton
            className="primary"
            onClick={closeMobileFilters}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Применить
          </MobileFilterActionButton>
        </MobileFiltersActions>
      </MobileFiltersMenu>
    </CatalogContainer>
  );
}

export default CatalogPage; 