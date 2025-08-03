import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faComments, 
  faCheckCircle, 
  faClock, 
  faPhone, 
  faEnvelope,
  faUser,
  faBuilding,
  faLightbulb,
  faHeadset,
  faGraduationCap,
  faShieldAlt,
  faCalendarAlt,
  faClipboardList,
  faPaperPlane,
  faExclamationTriangle,
  faInfoCircle,
  faTruck,
  faCreditCard,
  faHandshake,
  faMapMarkerAlt,
  faQuestionCircle,
  faTools,
  faCog,
  faCertificate,
  faUsers,
  faChartLine,
  faRocket,
  faStar
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled(motion.div)`
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

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ServiceIcon = styled.div`
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

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
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

const ConsultationPage = () => {
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
        <PageTitle>Профессиональные консультации</PageTitle>
        <PageSubtitle>
          Получите экспертную консультацию по выбору, установке и обслуживанию счетчиков электроэнергии. 
          Наши специалисты помогут подобрать оптимальное решение для ваших задач.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Виды консультаций</SectionTitle>
        <ServicesGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ServiceHeader>
              <ServiceIcon>
                <FontAwesomeIcon icon={faLightbulb} />
              </ServiceIcon>
              <ServiceTitle>Техническая консультация</ServiceTitle>
            </ServiceHeader>
            <ServiceDescription>
              Помощь в выборе подходящего счетчика электроэнергии с учетом технических характеристик и требований.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Анализ технических требований
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Подбор оптимального решения
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Расчет экономической эффективности
              </ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceHeader>
              <ServiceIcon>
                <FontAwesomeIcon icon={faTools} />
              </ServiceIcon>
              <ServiceTitle>Консультация по установке</ServiceTitle>
            </ServiceHeader>
            <ServiceDescription>
              Профессиональные рекомендации по монтажу и настройке счетчиков электроэнергии.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Схемы подключения
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Требования безопасности
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Настройка и калибровка
              </ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceHeader>
              <ServiceIcon>
                <FontAwesomeIcon icon={faCog} />
              </ServiceIcon>
              <ServiceTitle>Консультация по обслуживанию</ServiceTitle>
            </ServiceHeader>
            <ServiceDescription>
              Экспертные советы по техническому обслуживанию и ремонту оборудования.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Плановое обслуживание
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Диагностика неисправностей
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Рекомендации по эксплуатации
              </ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServiceHeader>
              <ServiceIcon>
                <FontAwesomeIcon icon={faCertificate} />
              </ServiceIcon>
              <ServiceTitle>Юридическая консультация</ServiceTitle>
            </ServiceHeader>
            <ServiceDescription>
              Консультации по правовым аспектам использования счетчиков электроэнергии.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Нормативные требования
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Сертификация оборудования
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Правовые аспекты эксплуатации
              </ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ServiceHeader>
              <ServiceIcon>
                <FontAwesomeIcon icon={faUsers} />
              </ServiceIcon>
              <ServiceTitle>Корпоративные консультации</ServiceTitle>
            </ServiceHeader>
            <ServiceDescription>
              Специализированные консультации для предприятий и организаций.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Аудит энергопотребления
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Оптимизация энергосистем
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Внедрение АСКУЭ
              </ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ServiceHeader>
              <ServiceIcon>
                <FontAwesomeIcon icon={faChartLine} />
              </ServiceIcon>
              <ServiceTitle>Консультации по энергосбережению</ServiceTitle>
            </ServiceHeader>
            <ServiceDescription>
              Рекомендации по снижению энергопотребления и повышению эффективности.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Анализ энергопотребления
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Рекомендации по экономии
              </ServiceFeature>
              <ServiceFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Программы энергосбережения
              </ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      <Section>
        <SectionTitle>Процесс консультации</SectionTitle>
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
              Свяжитесь с нами по телефону или оставьте заявку на сайте для записи на консультацию.
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
              <FontAwesomeIcon icon={faUser} />
            </ProcessIcon>
            <ProcessTitle>Анализ потребностей</ProcessTitle>
            <ProcessDescription>
              Наш специалист изучит ваши требования и технические характеристики объекта.
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
              <FontAwesomeIcon icon={faLightbulb} />
            </ProcessIcon>
            <ProcessTitle>Разработка решения</ProcessTitle>
            <ProcessDescription>
              Подготовка индивидуального решения с учетом всех технических и экономических факторов.
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
              <FontAwesomeIcon icon={faPaperPlane} />
            </ProcessIcon>
            <ProcessTitle>Предоставление рекомендаций</ProcessTitle>
            <ProcessDescription>
              Получение подробных рекомендаций и технической документации для реализации проекта.
            </ProcessDescription>
          </ProcessCard>
        </ProcessGrid>
      </Section>

      <Section>
        <SectionTitle>Преимущества наших консультаций</SectionTitle>
        <ContentGrid>
          <ContentCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FontAwesomeIcon icon={faStar} />
              Профессионализм
            </CardTitle>
            <CardText>
              Наши консультанты имеют многолетний опыт работы в сфере энергетики и регулярно проходят повышение квалификации.
            </CardText>
            <CardText>
              Мы используем современные методики анализа и последние достижения в области энергосбережения для разработки оптимальных решений.
            </CardText>
          </ContentCard>

          <ContentCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FontAwesomeIcon icon={faRocket} />
              Индивидуальный подход
            </CardTitle>
            <CardText>
              Каждая консультация разрабатывается индивидуально с учетом специфики вашего объекта и требований.
            </CardText>
            <CardText>
              Мы учитываем все факторы: от технических характеристик до бюджетных ограничений и сроков реализации.
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
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </InfoIcon>
            <InfoTitle>Выезд специалиста</InfoTitle>
            <InfoText>
              Выезд консультанта на объект для проведения технического обследования и анализа.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </InfoIcon>
            <InfoTitle>Долгосрочное сопровождение</InfoTitle>
            <InfoText>
              Постоянное техническое сопровождение проекта от разработки до внедрения и эксплуатации.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faGraduationCap} />
            </InfoIcon>
            <InfoTitle>Обучение персонала</InfoTitle>
            <InfoText>
              Проведение обучающих семинаров для вашего персонала по эксплуатации оборудования.
            </InfoText>
          </InfoCard>
        </InfoGrid>
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
            <InfoTitle>Сколько стоит консультация?</InfoTitle>
            <InfoText>
              Стоимость зависит от сложности проекта и объема работ. Первичная консультация часто бесплатна.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faClock} />
            </InfoIcon>
            <InfoTitle>Сколько длится консультация?</InfoTitle>
            <InfoText>
              Продолжительность зависит от сложности вопроса. Обычно от 30 минут до 2 часов.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faHeadset} />
            </InfoIcon>
            <InfoTitle>Можно ли получить консультацию онлайн?</InfoTitle>
            <InfoText>
              Да, мы проводим консультации по видеосвязи, что позволяет экономить время и средства.
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
        <ContactTitle>Нужна профессиональная консультация?</ContactTitle>
        <ContactText>
          Свяжитесь с нами для получения подробной информации о наших консультационных услугах, 
          записи на консультацию или обсуждения вашего проекта. Наши эксперты готовы помочь!
        </ContactText>
        <ContactButton
          onClick={handleContactClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          Записаться на консультацию
        </ContactButton>
      </ContactSection>
    </PageContainer>
  );
};

export default ConsultationPage; 