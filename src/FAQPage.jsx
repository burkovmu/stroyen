import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuestionCircle, 
  faChevronDown,
  faTruck,
  faCreditCard,
  faTools,
  faCertificate,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const PageContainer = styled.div`
  padding: 200px 0 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 200px 1rem 1.5rem;
  }
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(47,84,131,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(47,84,131,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(47,84,131,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(47,84,131,0.1)"/></svg>');
    opacity: 0.3;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #666666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;



const CategoriesSection = styled(motion.div)`
  margin-bottom: 4rem;
`;

const CategoriesGrid = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`;

const CategoryCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 180px;
  flex: 1;
  max-width: 220px;

  &:hover {
    border-color: #2f5483;
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.1);
    transform: translateY(-2px);
  }

  &.active {
    background: #2f5483;
    border-color: #2f5483;
    color: white;

    .category-icon {
      background: rgba(255, 255, 255, 0.2);
      color: white;
    }

    .category-title {
      color: white;
    }
  }

  @media (max-width: 768px) {
    min-width: auto;
    max-width: none;
    padding: 0.8rem 1rem;
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    gap: 0.8rem;
  }
`;

const CategoryIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 1rem;
  transition: all 0.3s ease;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
  transition: all 0.3s ease;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;



const FAQSection = styled(motion.div)`
  margin-bottom: 4rem;
`;

const FAQItem = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  margin-bottom: 0.8rem;
  border: 1px solid #e9ecef;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2f5483;
    box-shadow: 0 4px 12px rgba(47, 84, 131, 0.1);
  }
`;

const FAQHeader = styled.div`
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  background: #fafafa;

  &:hover {
    background: #f0f0f0;
  }
`;

const FAQQuestion = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
  flex: 1;
  line-height: 1.4;
`;

const FAQIcon = styled.div`
  color: #2f5483;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const FAQContent = styled(motion.div)`
  padding: 0 1.5rem 1.2rem;
  color: #666666;
  line-height: 1.6;
  font-size: 0.95rem;
  background: #ffffff;
`;

const ContactSection = styled(motion.div)`
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`;

const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
`;

const ContactText = styled.p`
  color: #666666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: white;
  background: #2f5483;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-2px);
  }

  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 2px solid #2f5483;

    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`;



function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const handleContactClick = () => {
    console.log('Связаться с нами');
  };

  const handleEmailClick = () => {
    console.log('Написать на email');
  };

  const toggleFAQ = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const categories = [
    { id: 'all', name: 'Все вопросы', icon: faQuestionCircle, count: 25 },
    { id: 'products', name: 'Продукция', icon: faQuestionCircle, count: 8 },
    { id: 'delivery', name: 'Доставка', icon: faTruck, count: 6 },
    { id: 'payment', name: 'Оплата', icon: faCreditCard, count: 5 },
    { id: 'service', name: 'Сервис', icon: faTools, count: 4 },
    { id: 'warranty', name: 'Гарантия', icon: faCertificate, count: 2 }
  ];

  const faqData = [
    {
      id: 1,
      category: 'products',
      question: 'Какие типы электросчетчиков вы предлагаете?',
      answer: 'Мы предлагаем широкий ассортимент электросчетчиков: однофазные и трехфазные, индукционные и электронные, с различными классами точности. В нашем каталоге представлены счетчики для бытового и промышленного использования от ведущих производителей.'
    },
    {
      id: 2,
      category: 'products',
      question: 'Как выбрать подходящий электросчетчик?',
      answer: 'При выборе электросчетчика необходимо учитывать: количество фаз (1 или 3), максимальную нагрузку, класс точности, тип подключения. Наши специалисты помогут подобрать оптимальный вариант для ваших потребностей.'
    },
    {
      id: 3,
      category: 'delivery',
      question: 'В какие регионы осуществляется доставка?',
      answer: 'Мы осуществляем доставку по всей России. Сроки доставки зависят от региона: в пределах МКАД - 1-2 дня, по Московской области - 2-3 дня, в другие регионы - 3-7 дней. Доставка может осуществляться курьером или транспортной компанией.'
    },
    {
      id: 4,
      category: 'delivery',
      question: 'Сколько стоит доставка?',
      answer: 'Стоимость доставки зависит от веса и габаритов товара, а также от региона доставки. При заказе от 50 000 рублей доставка по Москве бесплатная. Точную стоимость доставки вы можете уточнить у наших менеджеров.'
    },
    {
      id: 5,
      category: 'payment',
      question: 'Какие способы оплаты принимаются?',
      answer: 'Мы принимаем оплату наличными при получении, банковскими картами (Visa, MasterCard, МИР), безналичным расчетом для юридических лиц, а также через электронные платежные системы. Возможна оплата в рассрочку.'
    },
    {
      id: 6,
      category: 'payment',
      question: 'Можно ли оплатить товар в рассрочку?',
      answer: 'Да, мы предоставляем возможность покупки в рассрочку. Условия рассрочки зависят от суммы покупки и вашей кредитной истории. Подробную информацию можно получить у наших менеджеров.'
    },
    {
      id: 7,
      category: 'service',
      question: 'Предоставляете ли вы услуги монтажа?',
      answer: 'Да, мы предоставляем полный спектр услуг по монтажу и подключению электросчетчиков. Наши специалисты имеют необходимые допуски и сертификаты. Стоимость монтажа рассчитывается индивидуально.'
    },
    {
      id: 8,
      category: 'service',
      question: 'Есть ли техническая поддержка?',
      answer: 'Да, мы предоставляем техническую поддержку по всем нашим продуктам. Наши специалисты готовы ответить на ваши вопросы по телефону, email или через онлайн-чат на сайте.'
    },
    {
      id: 9,
      category: 'warranty',
      question: 'Какая гарантия на электросчетчики?',
      answer: 'Гарантийный срок на электросчетчики составляет от 3 до 7 лет в зависимости от модели и производителя. В течение гарантийного периода мы обеспечиваем бесплатный ремонт или замену неисправного оборудования.'
    },
    {
      id: 10,
      category: 'warranty',
      question: 'Что делать при поломке счетчика?',
      answer: 'При обнаружении неисправности электросчетчика необходимо немедленно прекратить его использование и обратиться к нам. В случае гарантийного случая мы обеспечим ремонт или замену. При отсутствии гарантии возможен платный ремонт.'
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesCategory;
  });

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>Часто задаваемые вопросы</PageTitle>
        <PageSubtitle>
          Ответы на самые популярные вопросы о нашей продукции, услугах и сервисе. 
          Не нашли ответ на свой вопрос? Свяжитесь с нами!
        </PageSubtitle>
      </PageHeader>





      <CategoriesSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <CategoriesGrid>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              className={activeCategory === category.id ? 'active' : ''}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                          <CategoryIcon className="category-icon">
              <FontAwesomeIcon icon={category.icon} />
            </CategoryIcon>
            <CategoryTitle className="category-title">{category.name}</CategoryTitle>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </CategoriesSection>

      <FAQSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {filteredFAQ.map((item) => (
          <FAQItem key={item.id}>
            <FAQHeader onClick={() => toggleFAQ(item.id)}>
              <FAQQuestion>{item.question}</FAQQuestion>
              <FAQIcon
                style={{
                  transform: expandedItems.has(item.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </FAQIcon>
            </FAQHeader>
            <AnimatePresence>
              {expandedItems.has(item.id) && (
                <FAQContent
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 500 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeInOut"
                  }}
                >
                  {item.answer}
                </FAQContent>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </FAQSection>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <ContactTitle>Не нашли ответ на свой вопрос?</ContactTitle>
        <ContactText>
          Наши специалисты готовы помочь вам с любыми вопросами. 
          Свяжитесь с нами удобным для вас способом.
        </ContactText>
        <ContactButtons>
          <ContactButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
          >
            <FontAwesomeIcon icon={faPhone} />
            Позвонить нам
          </ContactButton>
          <ContactButton
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmailClick}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Написать email
          </ContactButton>
        </ContactButtons>
      </ContactSection>
    </PageContainer>
  );
}

export default FAQPage; 