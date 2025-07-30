import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faBuilding, faPhone, faEnvelope, faMapMarkerAlt, faCreditCard, faTruck, faCheck, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import { useNotification } from './Notification';

const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
  padding-top: 7rem;
`;

const CheckoutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const BackButton = styled(motion.button)`
  background: none;
  border: none;
  color: #2f5483;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: rgba(47, 84, 131, 0.08);
    transform: translateX(-2px);
  }
`;

const CheckoutTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FormSection = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.1);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: #2f5483;
  }
`;

const CustomerTypeSelector = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CustomerTypeButton = styled(motion.button)`
  flex: 1;
  padding: 1.5rem;
  border: 2px solid ${props => props.active ? '#2f5483' : '#e0e0e0'};
  border-radius: 12px;
  background: ${props => props.active ? 'rgba(47, 84, 131, 0.05)' : '#ffffff'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  
  &:hover {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1.5rem;
    color: ${props => props.active ? '#2f5483' : '#666'};
  }
`;

const CustomerTypeTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.active ? '#2f5483' : '#333'};
`;

const CustomerTypeSubtitle = styled.div`
  font-size: 0.85rem;
  color: #666;
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
`;

const FormInput = styled.input`
  padding: 1rem 1.25rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 4px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem 1.25rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  background: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 4px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const DeliverySection = styled.div`
  margin-top: 2rem;
`;

const DeliveryOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DeliveryOption = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #ffffff;
  
  &:hover {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.02);
    transform: translateY(-1px);
  }
  
  input[type="radio"]:checked + & {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }
`;

const OrderSummary = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.1);
  height: fit-content;
  position: sticky;
  top: 2rem;
`;

const OrderItems = styled.div`
  margin-bottom: 2rem;
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const OrderItemImage = styled.div`
  width: 60px;
  height: 60px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #e0e0e0;
  
  img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }
`;

const OrderItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const OrderItemName = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
`;

const OrderItemDetails = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

const OrderItemPrice = styled.div`
  font-weight: 700;
  color: #2f5483;
  font-size: 1rem;
`;

const OrderTotal = styled.div`
  border-top: 2px solid #f0f0f0;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.2rem;
    color: #2f5483;
    border-top: 1px solid #f0f0f0;
    padding-top: 1rem;
  }
`;

const PlaceOrderButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  color: white;
  border: none;
  padding: 1.25rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(47, 84, 131, 0.4);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 6rem 2rem;
  color: #666;
`;

const EmptyCartIcon = styled.div`
  font-size: 4rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
`;

const EmptyCartText = styled.p`
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  color: #999;
  font-weight: 600;
`;

const EmptyCartSubtext = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #bbb;
`;



function CheckoutPage() {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const { addNotification } = useNotification();
  
  const [customerType, setCustomerType] = useState('individual'); // 'individual' или 'company'
  const [formData, setFormData] = useState({
    // Физическое лицо
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    comment: '',
    // Юридическое лицо
    companyName: '',
    inn: '',
    legalAddress: '',
    bankName: '',
    bik: '',
    accountNumber: '',
    deliveryMethod: 'courier'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Прокрутка вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (items.length === 0) {
      addNotification('Корзина пуста', 'warning', 3000);
      return;
    }

    // Проверяем обязательные поля в зависимости от типа клиента и способа доставки
    let requiredFields = customerType === 'individual' 
      ? ['firstName', 'lastName', 'phone', 'email']
      : ['companyName', 'inn', 'phone', 'email'];
    
    // Добавляем поля адреса только если выбрана доставка
    if (formData.deliveryMethod === 'courier') {
      requiredFields.push('address', 'city');
    }
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      addNotification('Пожалуйста, заполните все обязательные поля', 'warning', 3000);
      return;
    }

    setIsSubmitting(true);

    // Имитация отправки заказа
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Очищаем корзину
      clearCart();
      
      // Перенаправляем на страницу благодарности
      navigate('/thank-you');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <CheckoutContainer>
        <CheckoutHeader>
          <BackButton 
            onClick={() => navigate('/')}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Назад
          </BackButton>
          <CheckoutTitle>Оформление заказа</CheckoutTitle>
        </CheckoutHeader>
        
        <EmptyCart>
          <EmptyCartIcon>
            <FontAwesomeIcon icon={faCheck} />
          </EmptyCartIcon>
          <EmptyCartText>Корзина пуста</EmptyCartText>
          <EmptyCartSubtext>Добавьте товары в корзину для оформления заказа</EmptyCartSubtext>
        </EmptyCart>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <BackButton 
          onClick={() => navigate('/')}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Назад
        </BackButton>
        <CheckoutTitle>Оформление заказа</CheckoutTitle>
      </CheckoutHeader>



      <form onSubmit={handleSubmit}>
        <CheckoutContent>
          <div>
            <FormSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle>
                <FontAwesomeIcon icon={customerType === 'individual' ? faUser : faBuilding} />
                Тип клиента
              </SectionTitle>
              
              <CustomerTypeSelector>
                <CustomerTypeButton
                  type="button"
                  active={customerType === 'individual'}
                  onClick={() => setCustomerType('individual')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FontAwesomeIcon icon={faUser} />
                  <CustomerTypeTitle active={customerType === 'individual'}>
                    Физическое лицо
                  </CustomerTypeTitle>
                  <CustomerTypeSubtitle>
                    Для частных клиентов
                  </CustomerTypeSubtitle>
                </CustomerTypeButton>
                
                <CustomerTypeButton
                  type="button"
                  active={customerType === 'company'}
                  onClick={() => setCustomerType('company')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FontAwesomeIcon icon={faBuilding} />
                  <CustomerTypeTitle active={customerType === 'company'}>
                    Юридическое лицо
                  </CustomerTypeTitle>
                  <CustomerTypeSubtitle>
                    Для компаний и ИП
                  </CustomerTypeSubtitle>
                </CustomerTypeButton>
              </CustomerTypeSelector>
            </FormSection>

            <FormSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SectionTitle>
                <FontAwesomeIcon icon={customerType === 'individual' ? faUser : faBuilding} />
                {customerType === 'individual' ? 'Контактная информация' : 'Данные организации'}
              </SectionTitle>
              
              {customerType === 'individual' ? (
                <FormGrid>
                  <FormGroup>
                    <FormLabel>Имя *</FormLabel>
                    <FormInput
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Фамилия *</FormLabel>
                    <FormInput
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Введите вашу фамилию"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Телефон *</FormLabel>
                    <FormInput
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Email *</FormLabel>
                    <FormInput
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      required
                    />
                  </FormGroup>
                </FormGrid>
              ) : (
                <FormGrid>
                  <FormGroup>
                    <FormLabel>Название организации *</FormLabel>
                    <FormInput
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="ООО Рога и Копыта"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>ИНН *</FormLabel>
                    <FormInput
                      type="text"
                      name="inn"
                      value={formData.inn}
                      onChange={handleInputChange}
                      placeholder="1234567890"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Телефон *</FormLabel>
                    <FormInput
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Email *</FormLabel>
                    <FormInput
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@company.com"
                      required
                    />
                  </FormGroup>
                </FormGrid>
              )}
            </FormSection>

            <FormSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionTitle>
                <FontAwesomeIcon icon={faTruck} />
                Способ доставки
              </SectionTitle>
              
              <DeliveryOptions>
                <DeliveryOption>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="courier"
                    checked={formData.deliveryMethod === 'courier'}
                    onChange={handleInputChange}
                  />
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                      Доставка
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>
                      Стоимость доставки будет рассчитана менеджером после оформления заказа
                    </div>
                  </div>
                </DeliveryOption>
                
                <DeliveryOption>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickup"
                    checked={formData.deliveryMethod === 'pickup'}
                    onChange={handleInputChange}
                  />
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                      Самовывоз
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>
                      Забрать из нашего офиса • Бесплатно
                    </div>
                  </div>
                </DeliveryOption>
              </DeliveryOptions>
            </FormSection>

            {formData.deliveryMethod === 'courier' && (
              <FormSection
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <SectionTitle>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  Адрес доставки
                </SectionTitle>
                
                <FormGroup>
                  <FormLabel>Адрес доставки *</FormLabel>
                  <FormInput
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="ул. Примерная, д. 1, кв. 1"
                    required
                  />
                </FormGroup>
                
                <FormGrid style={{ marginTop: '1.5rem' }}>
                  <FormGroup>
                    <FormLabel>Город *</FormLabel>
                    <FormInput
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Москва"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Индекс</FormLabel>
                    <FormInput
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="123456"
                    />
                  </FormGroup>
                </FormGrid>
              </FormSection>
            )}

            <FormSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SectionTitle>
                <FontAwesomeIcon icon={faCreditCard} />
                Комментарий к заказу
              </SectionTitle>
              
              <FormGroup>
                <FormLabel>Дополнительная информация</FormLabel>
                <FormTextarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Укажите дополнительную информацию о заказе, особые требования к доставке или другие пожелания..."
                />
              </FormGroup>
            </FormSection>
          </div>

          <OrderSummary
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SectionTitle>Ваш заказ</SectionTitle>
            
            <OrderItems>
              {items.map((item) => (
                <OrderItem key={item.id}>
                  <OrderItemImage>
                    <img src={`/images/products/${item.image}`} alt={item.name} />
                  </OrderItemImage>
                  
                  <OrderItemInfo>
                    <OrderItemName>{item.name}</OrderItemName>
                    <OrderItemDetails>
                      {item.brand} • Количество: {item.quantity}
                    </OrderItemDetails>
                  </OrderItemInfo>
                  
                  <OrderItemPrice>
                    {(item.price * item.quantity).toLocaleString()} ₽
                  </OrderItemPrice>
                </OrderItem>
              ))}
            </OrderItems>
            
            <OrderTotal>
              <TotalRow>
                <span>Товары ({items.length}):</span>
                <span>{getTotalPrice().toLocaleString()} ₽</span>
              </TotalRow>
              
              <TotalRow>
                <span>Итого:</span>
                <span>
                  {formData.deliveryMethod === 'courier' 
                    ? `${getTotalPrice().toLocaleString()} ₽ + доставка` 
                    : `${getTotalPrice().toLocaleString()} ₽`
                  }
                </span>
              </TotalRow>
            </OrderTotal>
            
            <PlaceOrderButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    border: '2px solid white', 
                    borderTop: '2px solid transparent', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite' 
                  }} />
                  Оформление заказа...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCheck} />
                  Оформить заказ
                </>
              )}
            </PlaceOrderButton>
          </OrderSummary>
        </CheckoutContent>
      </form>
    </CheckoutContainer>
  );
}

export default CheckoutPage; 