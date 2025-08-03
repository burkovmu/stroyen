import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faArrowLeft, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFoundContainer = styled.div`
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  font-family: 'Inter', sans-serif;
  padding-top: 200px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

const NotFoundContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  padding-top: 200px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

const NotFoundIcon = styled(motion.div)`
  font-size: 8rem;
  color: #2f5483;
  margin-bottom: 2rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 6rem;
    margin-bottom: 1.5rem;
  }
`;

const NotFoundTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const NotFoundSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #666666;
  margin-bottom: 2rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const NotFoundDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: #888888;
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const NotFoundActions = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NotFoundButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 180px;
  justify-content: center;
  
  &.primary {
    background: #2f5483;
    color: white;
    
    &:hover {
      background: #1a2f4b;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 2px solid #2f5483;
    
    &:hover {
      background: #2f5483;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    padding: 0.8rem 1.5rem;
  }
`;

const SearchSection = styled(motion.div)`
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1.5rem;
  }
`;

const SearchTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  flex: 1;
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
`;

const SearchButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: #2f5483;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(47, 84, 131, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const PopularLinks = styled(motion.div)`
  margin-top: 2rem;
`;

const PopularLinksTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PopularLinksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PopularLink = styled(motion.a)`
  padding: 0.5rem 1rem;
  background: #ffffff;
  color: #2f5483;
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2f5483;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(47, 84, 131, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
    text-align: center;
  }
`;

function NotFoundPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const popularLinks = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Контакты', href: '/contacts' },
    { name: 'О компании', href: '/about' },
    { name: 'Доставка', href: '/delivery' },
    { name: 'Оплата', href: '/payment' }
  ];

  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundIcon
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </NotFoundIcon>
        
        <NotFoundTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          404
        </NotFoundTitle>
        
        <NotFoundSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Страница не найдена
        </NotFoundSubtitle>
        
        <NotFoundDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          К сожалению, запрашиваемая страница не существует или была перемещена. 
          Возможно, вы перешли по устаревшей ссылке или допустили ошибку в адресе.
        </NotFoundDescription>
        
        <NotFoundActions
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <NotFoundButton
            className="primary"
            onClick={handleGoHome}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faHome} />
            На главную
          </NotFoundButton>
          
          <NotFoundButton
            className="secondary"
            onClick={handleGoBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Назад
          </NotFoundButton>
        </NotFoundActions>
        
        <SearchSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <SearchTitle>Найти товар</SearchTitle>
          <form onSubmit={handleSearch}>
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Введите название товара..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FontAwesomeIcon icon={faSearch} />
                Найти
              </SearchButton>
            </SearchContainer>
          </form>
          
          <PopularLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <PopularLinksTitle>Популярные разделы</PopularLinksTitle>
            <PopularLinksList>
              {popularLinks.map((link, index) => (
                <PopularLink
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </PopularLink>
              ))}
            </PopularLinksList>
          </PopularLinks>
        </SearchSection>
      </NotFoundContent>
    </NotFoundContainer>
  );
}

export default NotFoundPage; 