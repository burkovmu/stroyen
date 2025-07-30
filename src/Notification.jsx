import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faShoppingCart, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';

const NotificationContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3000;
  max-width: 400px;
  width: 100%;
`;

const NotificationItem = styled(motion.div)`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => {
      switch (props.type) {
        case 'success':
          return 'linear-gradient(to bottom, #28a745, #20c997)';
        case 'error':
          return 'linear-gradient(to bottom, #dc3545, #fd7e14)';
        case 'info':
          return 'linear-gradient(to bottom, #17a2b8, #6f42c1)';
        case 'warning':
          return 'linear-gradient(to bottom, #ffc107, #fd7e14)';
        default:
          return 'linear-gradient(to bottom, #2f5483, #1a2f4b)';
      }
    }};
  }
`;

const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => {
    switch (props.type) {
      case 'success':
        return '#28a745';
      case 'error':
        return '#dc3545';
      case 'info':
        return '#17a2b8';
      case 'warning':
        return '#ffc107';
      default:
        return '#2f5483';
    }
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  flex-shrink: 0;
`;

const NotificationContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const NotificationTitle = styled.h4`
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
`;

const NotificationMessage = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-size: 0.8rem;
  
  &:hover {
    background: #f5f5f5;
    color: #666;
  }
`;

const NotificationContext = React.createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = React.useState([]);

  const addNotification = (message, type = 'success', duration = 3000) => {
    const id = Date.now() + Math.random();
    const notification = {
      id,
      message,
      type,
      duration
    };

    setNotifications(prev => [...prev, notification]);

    // Автоматически удаляем уведомление через указанное время
    setTimeout(() => {
      removeNotification(id);
    }, duration);

    return id;
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return faShoppingCart;
      case 'error':
        return faTimes;
      case 'info':
        return faInfo;
      case 'warning':
        return faTrash;
      default:
        return faShoppingCart;
    }
  };

  const getNotificationTitle = (type) => {
    switch (type) {
      case 'success':
        return 'Товар добавлен в корзину';
      case 'error':
        return 'Ошибка';
      case 'info':
        return 'Информация';
      case 'warning':
        return 'Товар удален из корзины';
      default:
        return 'Уведомление';
    }
  };

  const value = {
    notifications,
    addNotification,
    removeNotification
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer>
        <AnimatePresence>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <NotificationIcon type={notification.type}>
                <FontAwesomeIcon icon={getNotificationIcon(notification.type)} />
              </NotificationIcon>
              <NotificationContent>
                <NotificationTitle>{getNotificationTitle(notification.type)}</NotificationTitle>
                <NotificationMessage>{notification.message}</NotificationMessage>
              </NotificationContent>
              <CloseButton onClick={() => removeNotification(notification.id)}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
            </NotificationItem>
          ))}
        </AnimatePresence>
      </NotificationContainer>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}; 