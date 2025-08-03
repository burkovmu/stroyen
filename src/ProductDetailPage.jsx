import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faArrowLeft, 
  faPhone, 
  faEnvelope,
  faCheck,
  faSearch,
  faPaperPlane,
  faShieldAlt,
  faTruck,
  faHeadset,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import ProductGallery from './ProductGallery';

// Контейнер страницы
const ProductDetailContainer = styled.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 200px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

// Хлебные крошки
const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
`;

const BreadcrumbLink = styled.button`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  color: #999;
`;

// Основная информация о товаре
const ProductDetailContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// Левая колонка - изображение
const ProductImageSection = styled.div`
  position: relative;
  overflow: hidden;
`;

const ProductImage = styled(motion.div)`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  position: relative;
  transform-style: preserve-3d;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #dc3545;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 2;
`;

// Правая колонка - информация
const ProductInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProductCategory = styled.div`
  color: #2f5483;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProductType = styled.div`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

// Полное описание
const FullDescriptionSection = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

const FullDescriptionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const FullDescriptionText = styled.div`
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// Похожие товары
const SimilarProductsSection = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

const SimilarProductsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const SimilarProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SimilarProductCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const SimilarProductImage = styled.div`
  width: 100%;
  height: 200px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #2f5483;
  font-size: 2rem;
  font-weight: bold;
`;

const SimilarProductName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const SimilarProductType = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SimilarProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
`;

const SimilarProductButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, #1e3a5f 0%, #2f5483 100%);
    transform: translateY(-2px);
  }
`;



// Секция "Наши преимущества"
const AdvantagesSection = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: white;
  padding: 3rem 0;
`;

const AdvantagesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AdvantagesTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const AdvantageCard = styled.div`
  background: #f8f9fa;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    border-color: #2f5483;
    box-shadow: 0 2px 8px rgba(47, 84, 131, 0.1);
  }
`;

const AdvantageIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #2f5483;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
`;

const AdvantageTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
`;

const AdvantageText = styled.p`
  color: #666;
  line-height: 1.5;
  font-size: 0.9rem;
  margin: 0;
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

// Цена
const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const OriginalPrice = styled.div`
  font-size: 1.2rem;
  color: #999;
  text-decoration: line-through;
`;

const CurrentPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
`;



// Спецификации
const SpecificationsSection = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const SpecificationsTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const SpecificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SpecificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SpecificationLabel = styled.span`
  color: #666;
  font-weight: 500;
`;

const SpecificationValue = styled.span`
  color: #333;
  font-weight: 600;
`;

// Особенности
const FeaturesSection = styled.div`
  margin-bottom: 1.5rem;
`;

const FeaturesTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: #555;
  
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background: #2f5483;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

// Кнопки действий
const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddToCartButton = styled(motion.button)`
  flex: 1;
  background: #2f5483;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactButton = styled(motion.button)`
  flex: 1;
  background: transparent;
  color: #2f5483;
  border: 2px solid #2f5483;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

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

// Информация о доставке
const DeliveryInfo = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2f5483;
`;

const DeliveryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const DeliveryText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`;

// Состояние загрузки
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: #2f5483;
`;

// Ошибка
const ErrorContainer = styled.div`
  text-align: center;
  padding: 3rem;
  color: #dc3545;
`;

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  // Параллакс-скролл
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Трансформации для параллакс-эффекта
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const fullDescriptionY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const similarProductsY = useTransform(scrollYProgress, [0, 1], [0, -15]);


  useEffect(() => {
    // Прокрутка к верху страницы при загрузке
    window.scrollTo(0, 0);
    
    const fetchProduct = async () => {
      try {
        const response = await fetch('/catalog-products.json');
        const allProducts = await response.json();
        setProducts(allProducts);
        
        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Товар не найден');
        }
      } catch (err) {
        setError('Ошибка загрузки товара');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleContact = () => {
    // Здесь будет логика связи с менеджером
    alert('Свяжитесь с нами по телефону: +7 (999) 123-45-67');
  };

  const handleCustomOrder = () => {
    // Здесь будет логика для заказа под заказ
    alert('Для заказа под заказ свяжитесь с нами по телефону: +7 (999) 123-45-67');
  };

  // Функция для получения похожих товаров
  const getSimilarProducts = () => {
    if (!product || !products.length) return [];
    
    // Получаем товары из того же бренда и категории
    const similarProducts = products.filter(p => 
      p.id !== product.id && 
      (p.brand === product.brand || p.category === product.category)
    );
    
    // Возвращаем максимум 4 товара
    return similarProducts.slice(0, 4);
  };



  if (loading) {
    return (
      <ProductDetailContainer>
        <LoadingContainer>Загрузка товара...</LoadingContainer>
      </ProductDetailContainer>
    );
  }

  if (error) {
    return (
      <ProductDetailContainer>
        <ErrorContainer>
          <h2>Ошибка</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/catalog')}>
            Вернуться в каталог
          </button>
        </ErrorContainer>
      </ProductDetailContainer>
    );
  }

  if (!product) {
    return (
      <ProductDetailContainer>
        <ErrorContainer>
          <h2>Товар не найден</h2>
          <p>Запрашиваемый товар не существует</p>
          <button onClick={() => navigate('/catalog')}>
            Вернуться в каталог
          </button>
        </ErrorContainer>
      </ProductDetailContainer>
    );
  }

  return (
    <ProductDetailContainer ref={containerRef}>
      <Breadcrumbs>
        <BreadcrumbLink onClick={() => navigate('/')}>
          Главная
        </BreadcrumbLink>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbLink onClick={() => navigate('/catalog')}>
          Каталог
        </BreadcrumbLink>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <span>{product.name}</span>
      </Breadcrumbs>

      <ProductDetailContent>
        <ProductImageSection>
          <ProductGallery product={product} />
          {product.discount && (
            <DiscountBadge>-{product.discount}%</DiscountBadge>
          )}
        </ProductImageSection>

        <ProductInfoSection>
          <ProductCategory>{product.category}</ProductCategory>
          <ProductTitle style={{ y: titleY }}>{product.name}</ProductTitle>
          <ProductType>{product.type}</ProductType>
          <ProductDescription style={{ y: descriptionY }}>{product.description}</ProductDescription>

          <PriceSection>
            {product.originalPrice ? (
              <>
                <OriginalPrice>{product.originalPrice.toLocaleString()} ₽</OriginalPrice>
                <CurrentPrice>{product.price.toLocaleString()} ₽</CurrentPrice>
              </>
            ) : (
              <CurrentPrice>{product.price.toLocaleString()} ₽</CurrentPrice>
            )}
          </PriceSection>

          <ActionButtons>
            <AddToCartButton
              onClick={handleAddToCart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              Добавить в корзину
            </AddToCartButton>
            <ContactButton
              onClick={handleContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FontAwesomeIcon icon={faPhone} />
              Связаться с менеджером
            </ContactButton>
          </ActionButtons>

          <SpecificationsSection>
            <SpecificationsTitle>Технические характеристики</SpecificationsTitle>
            <SpecificationsGrid>
              {/* Стандартные характеристики для счетчиков */}
              {product.specifications.phases && product.specifications.phases !== 'нет' && (
                <SpecificationItem>
                  <SpecificationLabel>Фазы:</SpecificationLabel>
                  <SpecificationValue>{product.specifications.phases}</SpecificationValue>
                </SpecificationItem>
              )}
              {product.specifications.voltage && product.specifications.voltage !== 'нет' && (
                <SpecificationItem>
                  <SpecificationLabel>Напряжение:</SpecificationLabel>
                  <SpecificationValue>{product.specifications.voltage}</SpecificationValue>
                </SpecificationItem>
              )}
              {product.specifications.current && product.specifications.current !== 'нет' && (
                <SpecificationItem>
                  <SpecificationLabel>Ток:</SpecificationLabel>
                  <SpecificationValue>{product.specifications.current}</SpecificationValue>
                </SpecificationItem>
              )}
              {product.specifications.accuracy && product.specifications.accuracy !== 'нет' && (
                <SpecificationItem>
                  <SpecificationLabel>Класс точности:</SpecificationLabel>
                  <SpecificationValue>{product.specifications.accuracy}</SpecificationValue>
                </SpecificationItem>
              )}
              {product.specifications.tariffs && product.specifications.tariffs !== 'нет' && (
                <SpecificationItem>
                  <SpecificationLabel>Тарифность:</SpecificationLabel>
                  <SpecificationValue>{product.specifications.tariffs}</SpecificationValue>
                </SpecificationItem>
              )}
              {product.specifications.energy_type && product.specifications.energy_type !== 'нет' && (
                <SpecificationItem>
                  <SpecificationLabel>Тип энергии:</SpecificationLabel>
                  <SpecificationValue>{product.specifications.energy_type}</SpecificationValue>
                </SpecificationItem>
              )}
              
              {/* Специальные характеристики для устройств сбора данных */}
              {product.category === 'Устройства сбора и передачи данных' && (
                <>
                  {product.specifications.power_3phase && (
                    <SpecificationItem>
                      <SpecificationLabel>Питание 3-фазное:</SpecificationLabel>
                      <SpecificationValue>{product.specifications.power_3phase}</SpecificationValue>
                    </SpecificationItem>
                  )}
                  {product.specifications.power_1phase && (
                    <SpecificationItem>
                      <SpecificationLabel>Питание 1-фазное:</SpecificationLabel>
                      <SpecificationValue>{product.specifications.power_1phase}</SpecificationValue>
                    </SpecificationItem>
                  )}
                  {product.specifications.consumption && (
                    <SpecificationItem>
                      <SpecificationLabel>Потребление:</SpecificationLabel>
                      <SpecificationValue>{product.specifications.consumption}</SpecificationValue>
                    </SpecificationItem>
                  )}
                  {product.specifications.dimensions && (
                    <SpecificationItem>
                      <SpecificationLabel>Размеры:</SpecificationLabel>
                      <SpecificationValue>{product.specifications.dimensions}</SpecificationValue>
                    </SpecificationItem>
                  )}
                  {product.specifications.temperature && (
                    <SpecificationItem>
                      <SpecificationLabel>Температура:</SpecificationLabel>
                      <SpecificationValue>{product.specifications.temperature}</SpecificationValue>
                    </SpecificationItem>
                  )}
                  {product.specifications.supported_meters && (
                    <SpecificationItem>
                      <SpecificationLabel>Поддерживаемые счетчики:</SpecificationLabel>
                      <SpecificationValue>{product.specifications.supported_meters}</SpecificationValue>
                    </SpecificationItem>
                  )}
                </>
              )}
            </SpecificationsGrid>
          </SpecificationsSection>

          <FeaturesSection>
            <FeaturesTitle>Особенности</FeaturesTitle>
            <FeaturesList>
              {product.features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeaturesList>
          </FeaturesSection>

          <DeliveryInfo>
            <DeliveryTitle>Доставка и гарантия</DeliveryTitle>
            <DeliveryText>
              Бесплатная доставка по Москве и области. Гарантия 2 года. 
              Возможна установка и настройка оборудования.
            </DeliveryText>
          </DeliveryInfo>
        </ProductInfoSection>
      </ProductDetailContent>
      
      {product.fullDescription && (
        <FullDescriptionSection style={{ y: fullDescriptionY }}>
          <FullDescriptionTitle>Подробное описание</FullDescriptionTitle>
          <FullDescriptionText>
            {product.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </FullDescriptionText>
        </FullDescriptionSection>
      )}

            {(() => {
        const similarProducts = getSimilarProducts();
        return similarProducts.length > 0 && (
          <SimilarProductsSection style={{ y: similarProductsY }}>
          <SimilarProductsTitle>Похожие товары</SimilarProductsTitle>
          <SimilarProductsGrid>
            {similarProducts.map((similarProduct) => (
              <SimilarProductCard 
                key={similarProduct.id}
                onClick={() => navigate(`/product/${similarProduct.id}`)}
              >
                <SimilarProductImage>
                  {similarProduct.mainImage ? (
                    <img 
                      src={similarProduct.mainImage} 
                      alt={similarProduct.name}
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
                      fontWeight: 'bold',
                      borderRadius: '8px'
                    }}>
                      {similarProduct.brand}
                    </div>
                  )}
                </SimilarProductImage>
                <SimilarProductName>{similarProduct.name}</SimilarProductName>
                <SimilarProductType>{similarProduct.type}</SimilarProductType>
                <SimilarProductPrice>
                  {similarProduct.price.toLocaleString()} ₽
                </SimilarProductPrice>
                <SimilarProductButton>
                  Подробнее
                </SimilarProductButton>
              </SimilarProductCard>
            ))}
          </SimilarProductsGrid>
        </SimilarProductsSection>
        );
      })()}

      <AdvantagesSection>
        <AdvantagesContent>
          <AdvantagesTitle>Надежность в каждой детали</AdvantagesTitle>
          <AdvantagesGrid>
            <AdvantageCard>
              <AdvantageIcon>
                <FontAwesomeIcon icon={faShieldAlt} />
              </AdvantageIcon>
              <AdvantageTitle>Гарантия качества</AdvantageTitle>
              <AdvantageText>
                Все товары сертифицированы и имеют официальную гарантию производителя
              </AdvantageText>
            </AdvantageCard>

            <AdvantageCard>
              <AdvantageIcon>
                <FontAwesomeIcon icon={faTruck} />
              </AdvantageIcon>
              <AdvantageTitle>Быстрая доставка</AdvantageTitle>
              <AdvantageText>
                Доставляем по всей России в кратчайшие сроки
              </AdvantageText>
            </AdvantageCard>

            <AdvantageCard>
              <AdvantageIcon>
                <FontAwesomeIcon icon={faHeadset} />
              </AdvantageIcon>
              <AdvantageTitle>Поддержка 24/7</AdvantageTitle>
              <AdvantageText>
                Круглосуточная консультация и техническая поддержка
              </AdvantageText>
            </AdvantageCard>

            <AdvantageCard>
              <AdvantageIcon>
                <FontAwesomeIcon icon={faCreditCard} />
              </AdvantageIcon>
              <AdvantageTitle>Удобная оплата</AdvantageTitle>
              <AdvantageText>
                Принимаем все виды оплаты, работаем с НДС
              </AdvantageText>
            </AdvantageCard>
          </AdvantagesGrid>
        </AdvantagesContent>
      </AdvantagesSection>

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
    </ProductDetailContainer>
  );
}

export default ProductDetailPage; 