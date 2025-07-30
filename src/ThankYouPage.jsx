import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHome, faShoppingCart, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ThankYouContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
  padding-top: 7rem;
  text-align: center;
`;

const ThankYouCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.1);
  margin-bottom: 2rem;
`;

const SuccessIcon = styled.div`
  font-size: 4rem;
  color: #28a745;
  margin-bottom: 1.5rem;
`;

const ThankYouTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ThankYouSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const OrderInfo = styled.div`
  background: rgba(47, 84, 131, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(47, 84, 131, 0.1);
`;

const OrderInfoTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const OrderInfoText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  &.primary {
    background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
    color: white;
    box-shadow: 0 4px 20px rgba(47, 84, 131, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(47, 84, 131, 0.4);
    }
  }
  
  &.secondary {
    background: #ffffff;
    color: #2f5483;
    border: 2px solid #2f5483;
    
    &:hover {
      background: rgba(47, 84, 131, 0.05);
      transform: translateY(-1px);
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #666;
  
  svg {
    color: #2f5483;
  }
`;

function ThankYouPage() {
  const navigate = useNavigate();

  // Прокрутка вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThankYouContainer>
      <ThankYouCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SuccessIcon>
          <FontAwesomeIcon icon={faCheckCircle} />
        </SuccessIcon>
        
        <ThankYouTitle>Спасибо за заказ!</ThankYouTitle>
        
        <ThankYouSubtitle>
          Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время для уточнения деталей и подтверждения заказа.
        </ThankYouSubtitle>
        
        <OrderInfo>
          <OrderInfoTitle>Что дальше?</OrderInfoTitle>
          <OrderInfoText>
            • В течение 1-2 часов наш менеджер свяжется с вами для подтверждения заказа
          </OrderInfoText>
          <OrderInfoText>
            • Мы уточним детали доставки и рассчитаем точную стоимость
          </OrderInfoText>
          <OrderInfoText>
            • После подтверждения заказ будет передан в обработку
          </OrderInfoText>
          <OrderInfoText>
            • Вы получите уведомление о статусе заказа
          </OrderInfoText>
        </OrderInfo>
        
        <ActionButtons>
          <ActionButton
            className="primary"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faHome} />
            Вернуться на главную
          </ActionButton>
          
          <ActionButton
            className="secondary"
            onClick={() => navigate('/catalog')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Перейти в каталог
          </ActionButton>
        </ActionButtons>
      </ThankYouCard>
      
      <ContactInfo>
        <ContactInfoTitle>Остались вопросы?</ContactInfoTitle>
        <ContactItem>
          <FontAwesomeIcon icon={faPhone} />
          <span>+7 (999) 123-45-67</span>
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>info@company.com</span>
        </ContactItem>
      </ContactInfo>
    </ThankYouContainer>
  );
}

export default ThankYouPage; 