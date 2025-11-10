import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUndo, 
  faCheckCircle, 
  faClock, 
  faPhone, 
  faEnvelope,
  faFileAlt,
  faExclamationTriangle,
  faInfoCircle,
  faTruck,
  faCreditCard,
  faShieldAlt,
  faCalendarAlt,
  faClipboardList,
  faUser,
  faBox,
  faHandshake,
  faPaperPlane,
  faTimesCircle,
  faQuestionCircle,
  faMapMarkerAlt
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

const ReturnConditionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ConditionCard = styled(motion.div)`
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

const ConditionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ConditionIcon = styled.div`
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

const ConditionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const ConditionDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ConditionFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ConditionFeature = styled.li`
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

const ReturnPage = () => {
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
        <PageTitle>Возврат товара</PageTitle>
        <PageSubtitle>
          Удобные условия возврата и обмена товара в течение 14 дней. 
          Мы заботимся о вашем комфорте и удовлетворенности покупкой.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Условия возврата</SectionTitle>
        <ReturnConditionsGrid>
          <ConditionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ConditionHeader>
              <ConditionIcon>
                <FontAwesomeIcon icon={faCheckCircle} />
              </ConditionIcon>
              <ConditionTitle>Возврат в течение 14 дней</ConditionTitle>
            </ConditionHeader>
            <ConditionDescription>
              Вы можете вернуть товар в течение 14 дней с момента покупки без объяснения причин.
            </ConditionDescription>
            <ConditionFeatures>
              <ConditionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Полная комплектация товара
              </ConditionFeature>
              <ConditionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Сохранение товарного вида
              </ConditionFeature>
              <ConditionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Наличие документов о покупке
              </ConditionFeature>
            </ConditionFeatures>
          </ConditionCard>

          <ConditionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ConditionHeader>
              <ConditionIcon>
                <FontAwesomeIcon icon={faShieldAlt} />
              </ConditionIcon>
              <ConditionTitle>Гарантийный возврат</ConditionTitle>
            </ConditionHeader>
            <ConditionDescription>
              Возврат товара в течение гарантийного срока при обнаружении заводских дефектов.
            </ConditionDescription>
            <ConditionFeatures>
              <ConditionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Бесплатная диагностика
              </ConditionFeature>
              <ConditionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Замена на аналогичный товар
              </ConditionFeature>
              <ConditionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Возврат денежных средств
              </ConditionFeature>
            </ConditionFeatures>
          </ConditionCard>

          <ConditionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ConditionHeader>
              <ConditionIcon>
                <FontAwesomeIcon icon={faFileAlt} />
              </ConditionIcon>
              <ConditionTitle>Необходимые документы</ConditionTitle>
            </ConditionHeader>
            <ConditionDescription>
              Подготовьте комплект документов, подтверждающих покупку и право на возврат товара.
            </ConditionDescription>
            <ConditionFeatures>
              <ConditionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Заявление на возврат
              </ConditionFeature>
              <ConditionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Кассовый чек или договор поставки
              </ConditionFeature>
              <ConditionFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Документ, удостоверяющий личность
              </ConditionFeature>
            </ConditionFeatures>
          </ConditionCard>
        </ReturnConditionsGrid>
      </Section>

      <Section>
        <SectionTitle>Процесс возврата</SectionTitle>
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
            <ProcessTitle>Обращение</ProcessTitle>
            <ProcessDescription>
              Свяжитесь с нами по телефону или через форму на сайте для регистрации возврата.
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
              <FontAwesomeIcon icon={faClipboardList} />
            </ProcessIcon>
            <ProcessTitle>Проверка</ProcessTitle>
            <ProcessDescription>
              Наши специалисты проверяют соответствие товара условиям возврата и комплектацию.
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
              <FontAwesomeIcon icon={faCreditCard} />
            </ProcessIcon>
            <ProcessTitle>Возврат средств</ProcessTitle>
            <ProcessDescription>
              Возврат денежных средств на карту или банковский счет в течение 3-5 рабочих дней.
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
            <ProcessTitle>Подтверждение</ProcessTitle>
            <ProcessDescription>
              Отправка уведомления о завершении процедуры возврата и поступлении средств.
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
              <FontAwesomeIcon icon={faInfoCircle} />
              Что можно вернуть
            </CardTitle>
            <CardText>
              Возврату подлежат товары в полной комплектации с сохранением товарного вида, 
              потребительских свойств и заводской упаковки. Товар не должен иметь следов использования.
            </CardText>
            <CardText>
              Обязательно наличие документов о покупке: чек, гарантийный талон, 
              технический паспорт (если предусмотрен).
            </CardText>
          </ContentCard>

          <ContentCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              Что не подлежит возврату
            </CardTitle>
            <CardText>
              Не подлежат возврату товары с механическими повреждениями, следами эксплуатации, 
              нарушением целостности упаковки или отсутствием комплектующих.
            </CardText>
            <CardText>
              Также не возвращаются товары, изготовленные по индивидуальному заказу, 
              а также товары с истекшим гарантийным сроком.
            </CardText>
          </ContentCard>
        </ContentGrid>
      </Section>

      <Section>
        <SectionTitle>Часто задаваемые вопросы</SectionTitle>
        <InfoGrid>
          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </InfoIcon>
            <InfoTitle>Сколько времени занимает возврат?</InfoTitle>
            <InfoText>
              Процедура возврата занимает 3-5 рабочих дней с момента принятия товара.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faCreditCard} />
            </InfoIcon>
            <InfoTitle>Как происходит возврат денег?</InfoTitle>
            <InfoText>
              Деньги возвращаются на те же платежные реквизиты, с которых была совершена покупка.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faBox} />
            </InfoIcon>
            <InfoTitle>Нужна ли упаковка?</InfoTitle>
            <InfoText>
              Желательно сохранить оригинальную упаковку, но это не обязательное требование.
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
        <ContactTitle>Нужна помощь с возвратом товара?</ContactTitle>
        <ContactText>
          Свяжитесь с нами для получения подробной информации о процедуре возврата, 
          обмена товара или регистрации гарантийного случая. Наши специалисты готовы помочь!
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
};

export default ReturnPage; 