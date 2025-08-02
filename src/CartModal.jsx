import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash, faMinus, faPlus, faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import { useNotification } from './Notification';
import { useNavigate } from 'react-router-dom';

const CartOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  padding: 0;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`;

const CartSidebar = styled(motion.div)`
  background: #ffffff;
  width: 450px;
  max-width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: 90vh;
    border-radius: 16px;
  }
`;

const CartHeader = styled.div`
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  background: #ffffff;
  position: relative;
`;

const CartTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CartCount = styled.span`
  background: #2f5483;
  color: white;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-weight: 500;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

const CartContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
`;

const EmptyCartIcon = styled.div`
  font-size: 3rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
`;

const EmptyCartText = styled.p`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: #999;
  font-weight: 500;
`;

const EmptyCartSubtext = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: #bbb;
`;

const CartItemsList = styled.div`
  padding: 0;
`;

const CartItem = styled(motion.div)`
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #fafafa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const CartItemImage = styled.div`
  width: 60px;
  height: 60px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #f0f0f0;
  
  img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }
`;

const CartItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const CartItemName = styled.h4`
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
`;

const CartItemBrand = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 0.8rem;
  color: #666;
  font-weight: 400;
`;

const CartItemPrice = styled.div`
  font-weight: 600;
  color: #2f5483;
  font-size: 1rem;
`;

const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  min-width: 120px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const QuantityButton = styled.button`
  background: #f8f9fa;
  border: none;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #666;
  font-size: 0.75rem;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #e9ecef;
    color: #333;
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #f5f5f5;
  }
  
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  border: none;
  padding: 0.5rem 0.2rem;
  font-size: 0.85rem;
  background: #ffffff;
  font-weight: 600;
  color: #333;
  
  /* Убираем стрелочки для input type="number" */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type=number] {
    -moz-appearance: textfield;
  }
  
  &:focus {
    outline: none;
    background: #f8f9fa;
  }
`;

const RemoveButton = styled.button`
  background: none;
  color: #ff4757;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.8rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  
  &:hover {
    background: #fff5f5;
    color: #ff3742;
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const CartFooter = styled.div`
  padding: 1.5rem 2rem 2rem;
  border-top: 1px solid #f0f0f0;
  background: #ffffff;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
`;

const TotalLabel = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: #1a1a1a;
`;

const TotalAmount = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2f5483;
`;

const CartButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const CartButton = styled.button`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ClearCartButton = styled(CartButton)`
  background: #f8f9fa;
  color: #666;
  border: 1px solid #e9ecef;
  
  &:hover {
    background: #e9ecef;
    color: #333;
  }
`;

const CheckoutButton = styled(CartButton)`
  background: #2f5483;
  color: white;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const CartModalComponent = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();
  const { addNotification } = useNotification();
  const navigate = useNavigate();
  const [isRemoving, setIsRemoving] = useState(null);

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (!isNaN(quantity) && quantity >= 0) {
      updateQuantity(productId, quantity);
    }
  };

  const handleRemoveItem = (productId) => {
    const item = items.find(item => item.id === productId);
    setIsRemoving(productId);
    setTimeout(() => {
      removeFromCart(productId);
      setIsRemoving(null);
      if (item) {
        addNotification(`${item.name} удален из корзины`, 'warning', 2000);
      }
    }, 200);
  };

  const handleCheckout = () => {
    onClose(); // Закрываем модальное окно корзины
    navigate('/checkout'); // Перенаправляем на страницу оформления заказа
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <CartOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <CartSidebar
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CartHeader>
              <CartTitle>
                <FontAwesomeIcon icon={faShoppingCart} />
                Корзина
                {getTotalItems() > 0 && <CartCount>{getTotalItems()}</CartCount>}
              </CartTitle>
              <CloseButton onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
            </CartHeader>

            <CartContent>
              {items.length === 0 ? (
                <EmptyCart>
                  <EmptyCartIcon>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </EmptyCartIcon>
                  <EmptyCartText>Корзина пуста</EmptyCartText>
                  <EmptyCartSubtext>Добавьте товары для оформления заказа</EmptyCartSubtext>
                </EmptyCart>
              ) : (
                <CartItemsList>
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        opacity: isRemoving === item.id ? 0.5 : 1,
                        transform: isRemoving === item.id ? 'scale(0.98)' : 'scale(1)'
                      }}
                    >
                      <CartItemImage>
                        {item.mainImage ? (
                          <img src={item.mainImage} alt={item.name} />
                        ) : (
                          <img src={`/images/products/${item.image}`} alt={item.name} />
                        )}
                      </CartItemImage>
                      
                      <CartItemInfo>
                        <CartItemName>{item.name}</CartItemName>
                        <CartItemBrand>{item.brand}</CartItemBrand>
                        <CartItemPrice>{item.price.toLocaleString()} ₽</CartItemPrice>
                      </CartItemInfo>
                      
                      <CartItemActions>
                        <QuantityControl>
                          <QuantityButton
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </QuantityButton>
                          <QuantityInput
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            min="1"
                          />
                          <QuantityButton
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </QuantityButton>
                        </QuantityControl>
                        
                        <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </RemoveButton>
                      </CartItemActions>
                    </CartItem>
                  ))}
                </CartItemsList>
              )}
            </CartContent>

            {items.length > 0 && (
              <CartFooter>
                <CartTotal>
                  <TotalLabel>Итого:</TotalLabel>
                  <TotalAmount>{getTotalPrice().toLocaleString()} ₽</TotalAmount>
                </CartTotal>
                
                <CartButtons>
                  <ClearCartButton onClick={() => {
                    clearCart();
                    addNotification('Корзина полностью очищена', 'warning', 2000);
                  }}>
                    <FontAwesomeIcon icon={faTrash} />
                    Очистить
                  </ClearCartButton>
                  <CheckoutButton onClick={handleCheckout}>
                    Оформить заказ
                    <FontAwesomeIcon icon={faArrowRight} />
                  </CheckoutButton>
                </CartButtons>
              </CartFooter>
            )}
          </CartSidebar>
        </CartOverlay>
      )}
    </AnimatePresence>
  );
};

export default CartModalComponent; 