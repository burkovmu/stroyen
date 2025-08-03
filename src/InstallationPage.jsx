import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faClock, 
  faCertificate, 
  faTools, 
  faShieldAlt,
  faFileAlt,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCalendarAlt,
  faUserTie,
  faIndustry,
  faLightbulb,
  faCog,
  faChartLine,
  faClipboardList,
  faExclamationTriangle,
  faInfoCircle,
  faArrowRight,
  faDownload,
  faPaperPlane,
  faWrench,
  faScrewdriver,
  faHammer,
  faRuler,
  faCalculator,
  faDatabase,
  faNetworkWired,
  faPowerOff,
  faZap,
  faBolt,
  faCogs,
  faHardHat,
  faClipboardCheck,
  faTruck,
  faUsers,
  faAward,
  faHandshake,
  faGears,
  faBuilding,
  faHome,
  faStore,
  faHospital,
  faSchool,
  faUniversity
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
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: #666666;
  font-size: 0.95rem;

  &:before {
    content: '✓';
    color: #2f5483;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`;

const StepDescription = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const StepDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StepDetail = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #666666;
  font-size: 0.9rem;

  &:before {
    content: '•';
    color: #2f5483;
    font-weight: bold;
  }
`;

const InfoBox = styled(motion.div)`
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="0.8" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="0.5" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
  }
`;

const InfoBoxTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const InfoBoxText = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const InfoBoxList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;
`;

const InfoBoxItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;

  &:before {
    content: '✓';
    color: #ffffff;
    font-weight: bold;
  }
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

const WarningBox = styled(motion.div)`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const WarningIcon = styled.div`
  color: #856404;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const WarningContent = styled.div`
  flex: 1;
`;

const WarningTitle = styled.h4`
  color: #856404;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const WarningText = styled.p`
  color: #856404;
  margin: 0;
  line-height: 1.5;
`;

const DocumentSection = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`;

const DocumentTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const DocumentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DocumentItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }
`;

const DocumentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DocumentIcon = styled.div`
  color: #2f5483;
  font-size: 1.2rem;
`;

const DocumentText = styled.span`
  color: #333333;
  font-weight: 500;
`;

const DocumentButton = styled(motion.button)`
  background: #2f5483;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #1a2f4b;
    transform: translateY(-1px);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2f5483, #1a2f4b);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const ServiceText = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: #666666;
  font-size: 0.9rem;

  &:before {
    content: '✓';
    color: #2f5483;
    font-weight: bold;
    font-size: 1rem;
  }
`;

function InstallationPage() {
  const [activeTab, setActiveTab] = useState('services');

  const handleContactClick = () => {
    // Здесь можно добавить логику для открытия модального окна контактов
    console.log('Контактная информация');
  };

  const handleApplicationClick = () => {
    // Здесь можно добавить логику для открытия модального окна заявки
    console.log('Отправить заявку');
  };

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>Монтаж оборудования</PageTitle>
        <PageSubtitle>
          Профессиональный монтаж электрооборудования любой сложности. 
          Опытные специалисты, качественные материалы, гарантия на все виды работ.
        </PageSubtitle>
      </PageHeader>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle>Наши услуги по монтажу</SectionTitle>
        
        <Grid>
          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faBolt} />
            </CardIcon>
            <CardTitle>Монтаж электросчетчиков</CardTitle>
            <CardText>
              Установка и подключение электросчетчиков различных типов 
              в соответствии с требованиями ПУЭ и техническими условиями.
            </CardText>
            <FeatureList>
              <FeatureItem>Однофазные и трехфазные счетчики</FeatureItem>
              <FeatureItem>Многотарифные счетчики</FeatureItem>
              <FeatureItem>Счетчики с дистанционным считыванием</FeatureItem>
              <FeatureItem>Подключение к АСКУЭ</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faCogs} />
            </CardIcon>
            <CardTitle>Монтаж трансформаторов</CardTitle>
            <CardText>
              Установка и подключение трансформаторов тока и напряжения 
              для систем учета и защиты электрических сетей.
            </CardText>
            <FeatureList>
              <FeatureItem>Трансформаторы тока (ТТ)</FeatureItem>
              <FeatureItem>Трансформаторы напряжения (ТН)</FeatureItem>
              <FeatureItem>Высоковольтные трансформаторы</FeatureItem>
              <FeatureItem>Проверка и настройка</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faNetworkWired} />
            </CardIcon>
            <CardTitle>Монтаж АСКУЭ</CardTitle>
            <CardText>
              Комплексная установка автоматизированных систем коммерческого 
              учета электроэнергии с передачей данных.
            </CardText>
            <FeatureList>
              <FeatureItem>Устройства сбора и передачи данных</FeatureItem>
              <FeatureItem>Модемы и каналы связи</FeatureItem>
              <FeatureItem>Программное обеспечение</FeatureItem>
              <FeatureItem>Настройка и тестирование</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faShieldAlt} />
            </CardIcon>
            <CardTitle>Монтаж систем защиты</CardTitle>
            <CardText>
              Установка и настройка устройств защиты и автоматики 
              для электрических сетей и оборудования.
            </CardText>
            <FeatureList>
              <FeatureItem>Реле защиты и автоматики</FeatureItem>
              <FeatureItem>Автоматические выключатели</FeatureItem>
              <FeatureItem>Устройства плавного пуска</FeatureItem>
              <FeatureItem>Системы мониторинга</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionTitle>Объекты монтажа</SectionTitle>
        
        <ServicesGrid>
          <ServiceCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceIcon>
              <FontAwesomeIcon icon={faHome} />
            </ServiceIcon>
            <ServiceTitle>Жилые объекты</ServiceTitle>
            <ServiceText>
              Монтаж электрооборудования в частных домах, квартирах и коттеджах.
            </ServiceText>
            <ServiceList>
              <ServiceItem>Установка электросчетчиков</ServiceItem>
              <ServiceItem>Монтаж щитов учета</ServiceItem>
              <ServiceItem>Подключение бытовой техники</ServiceItem>
              <ServiceItem>Электромонтажные работы</ServiceItem>
            </ServiceList>
          </ServiceCard>

          <ServiceCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceIcon>
              <FontAwesomeIcon icon={faBuilding} />
            </ServiceIcon>
            <ServiceTitle>Коммерческие объекты</ServiceTitle>
            <ServiceText>
              Монтаж оборудования в офисах, торговых центрах и коммерческих зданиях.
            </ServiceText>
            <ServiceList>
              <ServiceItem>Системы учета электроэнергии</ServiceItem>
              <ServiceItem>Монтаж АСКУЭ</ServiceItem>
              <ServiceItem>Установка трансформаторов</ServiceItem>
              <ServiceItem>Системы автоматизации</ServiceItem>
            </ServiceList>
          </ServiceCard>

          <ServiceCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceIcon>
              <FontAwesomeIcon icon={faIndustry} />
            </ServiceIcon>
            <ServiceTitle>Промышленные объекты</ServiceTitle>
            <ServiceText>
              Комплексный монтаж электрооборудования на промышленных предприятиях.
            </ServiceText>
            <ServiceList>
              <ServiceItem>Высоковольтное оборудование</ServiceItem>
              <ServiceItem>Системы защиты и автоматики</ServiceItem>
              <ServiceItem>Промышленные счетчики</ServiceItem>
              <ServiceItem>Системы мониторинга</ServiceItem>
            </ServiceList>
          </ServiceCard>

          <ServiceCard
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceIcon>
              <FontAwesomeIcon icon={faHospital} />
            </ServiceIcon>
            <ServiceTitle>Социальные объекты</ServiceTitle>
            <ServiceText>
              Монтаж оборудования в больницах, школах, детских садах и других учреждениях.
            </ServiceText>
            <ServiceList>
              <ServiceItem>Системы резервного питания</ServiceItem>
              <ServiceItem>Монтаж счетчиков учета</ServiceItem>
              <ServiceItem>Системы безопасности</ServiceItem>
              <ServiceItem>Автоматизация процессов</ServiceItem>
            </ServiceList>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SectionTitle>Процесс монтажа</SectionTitle>
        
        <ProcessStep
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <StepNumber>1</StepNumber>
          <StepContent>
            <StepTitle>Обследование объекта</StepTitle>
            <StepDescription>
              Выезд специалиста на объект для изучения технических условий, 
              анализа существующей электросети и составления плана работ.
            </StepDescription>
            <StepDetails>
              <StepDetail>Изучение технических условий</StepDetail>
              <StepDetail>Анализ существующей сети</StepDetail>
              <StepDetail>Составление сметы</StepDetail>
            </StepDetails>
          </StepContent>
        </ProcessStep>

        <ProcessStep
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StepNumber>2</StepNumber>
          <StepContent>
            <StepTitle>Подготовка и согласование</StepTitle>
            <StepDescription>
              Разработка технического решения, согласование с заказчиком 
              и получение необходимых разрешений на проведение работ.
            </StepDescription>
            <StepDetails>
              <StepDetail>Разработка технического решения</StepDetail>
              <StepDetail>Согласование с заказчиком</StepDetail>
              <StepDetail>Получение разрешений</StepDetail>
            </StepDetails>
          </StepContent>
        </ProcessStep>

        <ProcessStep
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StepNumber>3</StepNumber>
          <StepContent>
            <StepTitle>Выполнение монтажных работ</StepTitle>
            <StepDescription>
              Профессиональное выполнение всех монтажных работ в соответствии 
              с техническими требованиями и нормами безопасности.
            </StepDescription>
            <StepDetails>
              <StepDetail>Монтаж оборудования</StepDetail>
              <StepDetail>Подключение и настройка</StepDetail>
              <StepDetail>Проверка работоспособности</StepDetail>
            </StepDetails>
          </StepContent>
        </ProcessStep>

        <ProcessStep
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <StepNumber>4</StepNumber>
          <StepContent>
            <StepTitle>Сдача-приемка работ</StepTitle>
            <StepDescription>
              Тестирование системы, оформление документации и передача 
              объекта заказчику с гарантийными обязательствами.
            </StepDescription>
            <StepDetails>
              <StepDetail>Комплексное тестирование</StepDetail>
              <StepDetail>Оформление документации</StepDetail>
              <StepDetail>Гарантийные обязательства</StepDetail>
            </StepDetails>
          </StepContent>
        </ProcessStep>
      </Section>

      <InfoBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <InfoBoxTitle>Почему выбирают нас?</InfoBoxTitle>
        <InfoBoxText>
          Более 10 лет опыта в области монтажа электрооборудования. 
          Наша команда состоит из квалифицированных специалистов с профильным образованием.
        </InfoBoxText>
        <InfoBoxList>
          <InfoBoxItem>Опытные монтажники с профильным образованием</InfoBoxItem>
          <InfoBoxItem>Сертифицированное оборудование и инструменты</InfoBoxItem>
          <InfoBoxItem>Соблюдение всех норм и требований безопасности</InfoBoxItem>
          <InfoBoxItem>Гарантия качества на все виды работ</InfoBoxItem>
          <InfoBoxItem>Конкурентные цены и гибкие условия</InfoBoxItem>
          <InfoBoxItem>Полное документальное сопровождение</InfoBoxItem>
        </InfoBoxList>
      </InfoBox>

      <WarningBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <WarningIcon>
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </WarningIcon>
        <WarningContent>
          <WarningTitle>Важная информация</WarningTitle>
          <WarningText>
            Все монтажные работы выполняются в строгом соответствии с требованиями 
            ПУЭ, ПТЭЭП и других нормативных документов. Наши специалисты имеют 
            необходимые допуски и сертификаты для работы с электрооборудованием. 
            Монтаж выполняется только при наличии технических условий и разрешений 
            от энергоснабжающей организации.
          </WarningText>
        </WarningContent>
      </WarningBox>

      <DocumentSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <DocumentTitle>
          <FontAwesomeIcon icon={faFileAlt} />
          Необходимые документы
        </DocumentTitle>
        <DocumentList>
          <DocumentItem>
            <DocumentInfo>
              <DocumentIcon>
                <FontAwesomeIcon icon={faFileAlt} />
              </DocumentIcon>
              <DocumentText>Технические условия</DocumentText>
            </DocumentInfo>
            <DocumentButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faDownload} />
              Скачать образец
            </DocumentButton>
          </DocumentItem>
          <DocumentItem>
            <DocumentInfo>
              <DocumentIcon>
                <FontAwesomeIcon icon={faFileAlt} />
              </DocumentIcon>
              <DocumentText>Договор на монтаж</DocumentText>
            </DocumentInfo>
            <DocumentButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faDownload} />
              Скачать образец
            </DocumentButton>
          </DocumentItem>
          <DocumentItem>
            <DocumentInfo>
              <DocumentIcon>
                <FontAwesomeIcon icon={faFileAlt} />
              </DocumentIcon>
              <DocumentText>Акт выполненных работ</DocumentText>
            </DocumentInfo>
            <DocumentButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faDownload} />
              Скачать образец
            </DocumentButton>
          </DocumentItem>
          <DocumentItem>
            <DocumentInfo>
              <DocumentIcon>
                <FontAwesomeIcon icon={faFileAlt} />
              </DocumentIcon>
              <DocumentText>Гарантийные обязательства</DocumentText>
            </DocumentInfo>
            <DocumentButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faDownload} />
              Скачать образец
            </DocumentButton>
          </DocumentItem>
        </DocumentList>
      </DocumentSection>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <ContactTitle>Готовы заказать монтаж оборудования?</ContactTitle>
        <ContactText>
          Свяжитесь с нами для получения подробной консультации и расчета стоимости. 
          Наши специалисты помогут подобрать оптимальное решение для вашего объекта.
        </ContactText>
        <ContactButtons>
          <ContactButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
          >
            <FontAwesomeIcon icon={faPhone} />
            Получить консультацию
          </ContactButton>
          <ContactButton
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleApplicationClick}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Отправить заявку
          </ContactButton>
        </ContactButtons>
      </ContactSection>
    </PageContainer>
  );
}

export default InstallationPage; 