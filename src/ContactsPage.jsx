import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faClock, 
  faLocationDot, 
  faPaperPlane,
  faBuilding,
  faUser,
  faMobileAlt,
  faFax
} from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
    padding: 100px 1rem 1.5rem;
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
  font-size: 3rem;
  font-weight: 700;
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
  font-size: 1.2rem;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfoSection = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 3px;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid rgba(47, 84, 131, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    box-shadow: 0 4px 15px rgba(47, 84, 131, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const ContactContent = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  color: #2f5483;
  font-weight: 600;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactDescription = styled.div`
  font-size: 0.9rem;
  color: #888888;
  line-height: 1.4;
`;

const ContactLink = styled.a`
  color: #2f5483;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #1a2f4b;
    text-decoration: underline;
  }
`;



const ContactFormSection = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
`;

const FormInput = styled.input`
  padding: 1rem 1.2rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  transition: all 0.3s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }

  &::placeholder {
    color: #999999;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem 1.2rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }

  &::placeholder {
    color: #999999;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(47, 84, 131, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(47, 84, 131, 0.4);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const MapSection = styled(motion.div)`
  margin-top: 4rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-size: 1.1rem;
  margin-top: 2rem;
`;



function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    }, 2000);
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Контакты
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Свяжитесь с нами любым удобным способом. Наши специалисты готовы ответить на все ваши вопросы и помочь с выбором оборудования. Мы работаем по всей России из нашего офиса в Москве.
        </PageSubtitle>
      </PageHeader>

      <ContentGrid>
        <ContactInfoSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SectionTitle>Контактная информация</SectionTitle>
          
          <ContactItem
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ContactIcon>
              <FontAwesomeIcon icon={faPhone} />
            </ContactIcon>
            <ContactContent>
              <ContactLabel>Телефон</ContactLabel>
              <ContactValue>
                <ContactLink href="tel:+79991234567">+7 (999) 123-45-67</ContactLink>
              </ContactValue>
              <ContactDescription>Основной номер для связи</ContactDescription>

            </ContactContent>
          </ContactItem>

          <ContactItem
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ContactIcon>
              <FontAwesomeIcon icon={faTelegram} />
            </ContactIcon>
            <ContactContent>
              <ContactLabel>Telegram</ContactLabel>
              <ContactValue>
                <ContactLink href="https://t.me/stroienergetika" target="_blank" rel="noopener noreferrer">@stroienergetika</ContactLink>
              </ContactValue>
              <ContactDescription>Быстрые ответы и оперативные консультации</ContactDescription>
            </ContactContent>
          </ContactItem>

          <ContactItem
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ContactIcon>
              <FontAwesomeIcon icon={faWhatsapp} />
            </ContactIcon>
            <ContactContent>
              <ContactLabel>WhatsApp</ContactLabel>
              <ContactValue>
                <ContactLink href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer">+7 (999) 123-45-67</ContactLink>
              </ContactValue>
              <ContactDescription>Пишите нам в мессенджере 24/7</ContactDescription>
            </ContactContent>
          </ContactItem>

          <ContactItem
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ContactIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </ContactIcon>
            <ContactContent>
              <ContactLabel>Email</ContactLabel>
              <ContactValue>
                <ContactLink href="mailto:info@stroienergetika.ru">info@stroienergetika.ru</ContactLink>
              </ContactValue>
              <ContactDescription>Для заявок и вопросов</ContactDescription>
            </ContactContent>
          </ContactItem>

          <ContactItem
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ContactIcon>
              <FontAwesomeIcon icon={faClock} />
            </ContactIcon>
            <ContactContent>
              <ContactLabel>Режим работы</ContactLabel>
              <ContactValue>Пн-Пт: 9:00 - 18:00</ContactValue>
              <ContactDescription>Сб-Вс: выходной</ContactDescription>
            </ContactContent>
          </ContactItem>

          <ContactItem
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ContactIcon>
              <FontAwesomeIcon icon={faBuilding} />
            </ContactIcon>
            <ContactContent>
              <ContactLabel>Адрес офиса</ContactLabel>
              <ContactValue>Москва, ул. Примерная, 123</ContactValue>
              <ContactDescription>Главный офис компании</ContactDescription>
            </ContactContent>
          </ContactItem>


        </ContactInfoSection>

        <ContactFormSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SectionTitle>Напишите нам</SectionTitle>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Ваше имя *</FormLabel>
              <FormInput
                type="text"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={(e) => handleFormChange('name', e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email *</FormLabel>
              <FormInput
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleFormChange('email', e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Телефон</FormLabel>
              <FormInput
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => handleFormChange('phone', e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Тема сообщения *</FormLabel>
              <FormInput
                type="text"
                placeholder="Кратко опишите тему"
                value={formData.subject}
                onChange={(e) => handleFormChange('subject', e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Сообщение *</FormLabel>
              <FormTextarea
                placeholder="Подробно опишите ваш вопрос или заявку..."
                value={formData.message}
                onChange={(e) => handleFormChange('message', e.target.value)}
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
            </SubmitButton>
          </Form>
        </ContactFormSection>
      </ContentGrid>



      <MapSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <SectionTitle>Карта</SectionTitle>
        <MapContainer>
          Здесь будет интерактивная карта с расположением офисов
        </MapContainer>
      </MapSection>
    </PageContainer>
  );
}

export default ContactsPage; 