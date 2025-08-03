import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruck, 
  faMapMarkerAlt, 
  faClock, 
  faPhone, 
  faCheckCircle, 
  faShieldAlt,
  faBox,
  faUser,
  faCreditCard,
  faRoute,
  faTruckFast,
  faHandshake,
  faCalculator,
  faPaperPlane,
  faLocationDot,
  faEnvelope,
  faBuilding
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

const Section = styled(motion.section)`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 4px;
  }
`;

const DeliveryOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const DeliveryOptionCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #2f5483, #1e3a5f);
  }
`;

const OptionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const OptionIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const OptionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const OptionPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const OptionDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const OptionFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const OptionFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666666;
  margin-bottom: 0.5rem;

  svg {
    color: #2f5483;
    font-size: 0.9rem;
  }
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

const ContentCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2f5483;
    font-size: 1.5rem;
  }
`;

const CardText = styled.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ProcessCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`;

const ProcessNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ProcessIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(47, 84, 131, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #2f5483;
  font-size: 1.3rem;
`;

const ProcessTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const ProcessDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;

const ContactSection = styled(motion.div)`
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`;

const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const ContactButton = styled(motion.button)`
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
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const InfoCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(47, 84, 131, 0.15);
  }
`;

const InfoIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const InfoTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;

function DeliveryPage() {
  const handleContactClick = () => {
    // Прокрутка к форме обратной связи
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>Доставка</PageTitle>
        <PageSubtitle>
          Быстрая и надежная доставка счетчиков электроэнергии по всей России. 
          Профессиональная установка и настройка оборудования с гарантией качества.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Варианты доставки</SectionTitle>
        <DeliveryOptionsGrid>
          <DeliveryOptionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <OptionHeader>
              <OptionIcon>
                <FontAwesomeIcon icon={faTruck} />
              </OptionIcon>
              <OptionTitle>Стандартная доставка</OptionTitle>
            </OptionHeader>
            <OptionPrice>от 500 ₽</OptionPrice>
            <OptionDescription>
              Доставка в течение 2-3 рабочих дней по Москве и Московской области.
            </OptionDescription>
            <OptionFeatures>
              <OptionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Доставка до подъезда
              </OptionFeature>
              <OptionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Уведомление о доставке
              </OptionFeature>
              <OptionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Возможность выбора времени
              </OptionFeature>
            </OptionFeatures>
          </DeliveryOptionCard>

          <DeliveryOptionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <OptionHeader>
              <OptionIcon>
                <FontAwesomeIcon icon={faTruckFast} />
              </OptionIcon>
              <OptionTitle>Экспресс доставка</OptionTitle>
            </OptionHeader>
            <OptionPrice>от 1000 ₽</OptionPrice>
            <OptionDescription>
              Доставка в день заказа или на следующий день по Москве.
            </OptionDescription>
            <OptionFeatures>
              <OptionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Доставка в течение 24 часов
              </OptionFeature>
              <OptionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Приоритетная обработка
              </OptionFeature>
              <OptionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Подъем на этаж включен
              </OptionFeature>
            </OptionFeatures>
          </DeliveryOptionCard>

          <DeliveryOptionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <OptionHeader>
              <OptionIcon>
                <FontAwesomeIcon icon={faHandshake} />
              </OptionIcon>
              <OptionTitle>Доставка с установкой</OptionTitle>
            </OptionHeader>
            <OptionPrice>от 2000 ₽</OptionPrice>
            <OptionDescription>
              Полный комплекс услуг: доставка, установка и настройка оборудования.
            </OptionDescription>
            <OptionFeatures>
              <OptionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Профессиональная установка
              </OptionFeature>
              <OptionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Настройка и тестирование
              </OptionFeature>
              <OptionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Гарантия на работы
              </OptionFeature>
            </OptionFeatures>
          </DeliveryOptionCard>
        </DeliveryOptionsGrid>
      </Section>

      <Section>
        <SectionTitle>Как происходит доставка</SectionTitle>
        <ProcessGrid>
          <ProcessCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>1</ProcessNumber>
            <ProcessIcon>
              <FontAwesomeIcon icon={faPhone} />
            </ProcessIcon>
            <ProcessTitle>Оформление заказа</ProcessTitle>
            <ProcessDescription>
              Оставляете заявку на сайте или звоните нам. Менеджер уточнит детали доставки.
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>2</ProcessNumber>
            <ProcessIcon>
              <FontAwesomeIcon icon={faBox} />
            </ProcessIcon>
            <ProcessTitle>Подготовка заказа</ProcessTitle>
            <ProcessDescription>
              Мы комплектуем ваш заказ и готовим к отправке. Проверяем качество товара.
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>3</ProcessNumber>
            <ProcessIcon>
              <FontAwesomeIcon icon={faTruck} />
            </ProcessIcon>
            <ProcessTitle>Доставка</ProcessTitle>
            <ProcessDescription>
              Курьер доставляет заказ в указанное время и место. Подписываете документы.
            </ProcessDescription>
          </ProcessCard>

          <ProcessCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>4</ProcessNumber>
            <ProcessIcon>
              <FontAwesomeIcon icon={faCheckCircle} />
            </ProcessIcon>
            <ProcessTitle>Получение</ProcessTitle>
            <ProcessDescription>
              Проверяете товар, подписываете акт приема-передачи. При необходимости - установка.
            </ProcessDescription>
          </ProcessCard>
        </ProcessGrid>
      </Section>

      <Section>
        <SectionTitle>Важная информация</SectionTitle>
        <ContentGrid>
          <ContentCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FontAwesomeIcon icon={faShieldAlt} />
              Условия доставки
            </CardTitle>
            <CardText>
              Доставка осуществляется по будним дням с 9:00 до 18:00. В выходные дни доставка 
              возможна по предварительной договоренности за дополнительную плату.
            </CardText>
            <CardText>
              При заказе на сумму от 50 000 ₽ доставка по Москве осуществляется бесплатно. 
              Для регионов стоимость доставки рассчитывается индивидуально.
            </CardText>
          </ContentCard>

          <ContentCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FontAwesomeIcon icon={faUser} />
              Получение заказа
            </CardTitle>
            <CardText>
              При получении заказа необходимо предъявить паспорт и документ, подтверждающий 
              право на получение товара (доверенность, если заказ получает не покупатель).
            </CardText>
            <CardText>
              Обязательно проверьте целостность упаковки и комплектность товара перед подписанием 
              документов о получении.
            </CardText>
          </ContentCard>
        </ContentGrid>
      </Section>

      <Section>
        <SectionTitle>Дополнительные услуги</SectionTitle>
        <InfoGrid>
          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faCalculator} />
            </InfoIcon>
            <InfoTitle>Расчет стоимости</InfoTitle>
            <InfoText>
              Бесплатный расчет стоимости доставки и установки. Учитываем все нюансы вашего объекта.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faRoute} />
            </InfoIcon>
            <InfoTitle>Доставка в регионы</InfoTitle>
            <InfoText>
              Доставляем по всей России через надежных транспортных партнеров. Сроки и стоимость уточняйте.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faCreditCard} />
            </InfoIcon>
            <InfoTitle>Оплата при получении</InfoTitle>
            <InfoText>
              Возможность оплаты наличными или картой при получении заказа. Безопасно и удобно.
            </InfoText>
          </InfoCard>
        </InfoGrid>
      </Section>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactTitle>Остались вопросы по доставке?</ContactTitle>
        <ContactText>
          Свяжитесь с нами для получения подробной информации о доставке, 
          расчета стоимости и согласования времени доставки. Наши специалисты готовы помочь!
        </ContactText>
        <ContactButton
          onClick={handleContactClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          Связаться с нами
        </ContactButton>
      </ContactSection>
    </PageContainer>
  );
}

export default DeliveryPage; 