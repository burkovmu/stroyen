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
  faBolt,
  faGaugeHigh,
  faMicrochip,
  faFlask,
  faRuler,
  faCalculator,
  faDatabase,
  faNetworkWired,
  faPowerOff,
  faZap
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

const TechnicalSpecs = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  margin-bottom: 3rem;
`;

const SpecsTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const SpecsItem = styled.div`
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
`;

const SpecsItemTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
`;

const SpecsItemText = styled.p`
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

function TransformerVerificationPage() {
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
        <PageTitle>Поверка трансформаторов тока (напряжения)</PageTitle>
        <PageSubtitle>
          Профессиональная поверка трансформаторов тока и напряжения с использованием 
          современного оборудования. Аккредитованная лаборатория, официальные документы.
        </PageSubtitle>
      </PageHeader>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle>Наши услуги по поверке трансформаторов</SectionTitle>
        
        <Grid>
          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faBolt} />
            </CardIcon>
            <CardTitle>Поверка трансформаторов тока</CardTitle>
            <CardText>
              Поверка трансформаторов тока (ТТ) для систем учета электроэнергии 
              и защиты электрических сетей.
            </CardText>
            <FeatureList>
              <FeatureItem>Классы точности 0.2S, 0.5S, 1.0</FeatureItem>
              <FeatureItem>Номинальные токи от 5А до 5000А</FeatureItem>
              <FeatureItem>Проверка погрешностей</FeatureItem>
              <FeatureItem>Испытание изоляции</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faZap} />
            </CardIcon>
            <CardTitle>Поверка трансформаторов напряжения</CardTitle>
            <CardText>
              Поверка трансформаторов напряжения (ТН) для систем измерения 
              и защиты высоковольтных сетей.
            </CardText>
            <FeatureList>
              <FeatureItem>Классы точности 0.2, 0.5, 1.0, 3.0</FeatureItem>
              <FeatureItem>Номинальные напряжения до 35кВ</FeatureItem>
              <FeatureItem>Проверка угловых погрешностей</FeatureItem>
              <FeatureItem>Испытание диэлектрической прочности</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faTools} />
            </CardIcon>
            <CardTitle>Выездная поверка</CardTitle>
            <CardText>
              Выполняем поверку трансформаторов на территории заказчика 
              с использованием мобильного оборудования.
            </CardText>
            <FeatureList>
              <FeatureItem>Мобильная лаборатория</FeatureItem>
              <FeatureItem>Минимальные простои</FeatureItem>
              <FeatureItem>Сертифицированное оборудование</FeatureItem>
              <FeatureItem>Официальные документы</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faCertificate} />
            </CardIcon>
            <CardTitle>Сертификация и калибровка</CardTitle>
            <CardText>
              Сертификация и калибровка измерительного оборудования 
              для поверки трансформаторов.
            </CardText>
            <FeatureList>
              <FeatureItem>Калибровка измерительных цепей</FeatureItem>
              <FeatureItem>Сертификация оборудования</FeatureItem>
              <FeatureItem>Поверка эталонных средств</FeatureItem>
              <FeatureItem>Метрологическое обеспечение</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionTitle>Процесс поверки трансформаторов</SectionTitle>
        
        <ProcessStep
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <StepNumber>1</StepNumber>
          <StepContent>
            <StepTitle>Предварительная оценка</StepTitle>
            <StepDescription>
              Анализируем технические характеристики трансформатора, 
              определяем объем работ и необходимое оборудование.
            </StepDescription>
            <StepDetails>
              <StepDetail>Изучение паспортных данных</StepDetail>
              <StepDetail>Определение класса точности</StepDetail>
              <StepDetail>Выбор методики поверки</StepDetail>
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
            <StepTitle>Визуальный осмотр</StepTitle>
            <StepDescription>
              Проводим внешний осмотр трансформатора, проверяем целостность 
              корпуса, маркировку и состояние изоляции.
            </StepDescription>
            <StepDetails>
              <StepDetail>Проверка внешнего состояния</StepDetail>
              <StepDetail>Контроль маркировки</StepDetail>
              <StepDetail>Осмотр изоляции</StepDetail>
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
            <StepTitle>Электрические испытания</StepTitle>
            <StepDescription>
              Выполняем комплекс электрических испытаний для определения 
              точности и соответствия требованиям стандартов.
            </StepDescription>
            <StepDetails>
              <StepDetail>Измерение погрешностей</StepDetail>
              <StepDetail>Проверка угловых погрешностей</StepDetail>
              <StepDetail>Испытание изоляции</StepDetail>
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
            <StepTitle>Оформление результатов</StepTitle>
            <StepDescription>
              Оформляем официальные документы о поверке, включая протоколы 
              измерений и сертификаты поверки.
            </StepDescription>
            <StepDetails>
              <StepDetail>Протокол поверки</StepDetail>
              <StepDetail>Сертификат поверки</StepDetail>
              <StepDetail>Регистрация в реестре</StepDetail>
            </StepDetails>
          </StepContent>
        </ProcessStep>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SectionTitle>Типы трансформаторов</SectionTitle>
        
        <Grid>
          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faBolt} />
            </CardIcon>
            <CardTitle>Трансформаторы тока</CardTitle>
            <CardText>
              Поверка трансформаторов тока различных типов и классов точности.
            </CardText>
            <FeatureList>
              <FeatureItem>Проходные трансформаторы тока</FeatureItem>
              <FeatureItem>Шинные трансформаторы тока</FeatureItem>
              <FeatureItem>Опорные трансформаторы тока</FeatureItem>
              <FeatureItem>Встроенные трансформаторы тока</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faZap} />
            </CardIcon>
            <CardTitle>Трансформаторы напряжения</CardTitle>
            <CardText>
              Поверка трансформаторов напряжения для систем измерения и защиты.
            </CardText>
            <FeatureList>
              <FeatureItem>Однофазные трансформаторы напряжения</FeatureItem>
              <FeatureItem>Трехфазные трансформаторы напряжения</FeatureItem>
              <FeatureItem>Каскадные трансформаторы напряжения</FeatureItem>
              <FeatureItem>Емкостные трансформаторы напряжения</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faIndustry} />
            </CardIcon>
            <CardTitle>Промышленные трансформаторы</CardTitle>
            <CardText>
              Поверка специализированных трансформаторов для промышленных объектов.
            </CardText>
            <FeatureList>
              <FeatureItem>Высоковольтные трансформаторы</FeatureItem>
              <FeatureItem>Трансформаторы для АСКУЭ</FeatureItem>
              <FeatureItem>Специализированные трансформаторы</FeatureItem>
              <FeatureItem>Трансформаторы для защиты</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faMicrochip} />
            </CardIcon>
            <CardTitle>Электронные трансформаторы</CardTitle>
            <CardText>
              Поверка современных электронных трансформаторов с цифровым выходом.
            </CardText>
            <FeatureList>
              <FeatureItem>Цифровые трансформаторы тока</FeatureItem>
              <FeatureItem>Цифровые трансформаторы напряжения</FeatureItem>
              <FeatureItem>Гибридные трансформаторы</FeatureItem>
              <FeatureItem>Трансформаторы с цифровым интерфейсом</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <TechnicalSpecs
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <SpecsTitle>
          <FontAwesomeIcon icon={faGaugeHigh} />
          Технические характеристики
        </SpecsTitle>
        <SpecsGrid>
          <SpecsItem>
            <SpecsItemTitle>Классы точности ТТ</SpecsItemTitle>
            <SpecsItemText>
              0.1, 0.2, 0.2S, 0.5, 0.5S, 1.0, 3.0, 5.0, 10.0
            </SpecsItemText>
          </SpecsItem>
          <SpecsItem>
            <SpecsItemTitle>Классы точности ТН</SpecsItemTitle>
            <SpecsItemText>
              0.1, 0.2, 0.5, 1.0, 3.0, 6.0
            </SpecsItemText>
          </SpecsItem>
          <SpecsItem>
            <SpecsItemTitle>Номинальные токи ТТ</SpecsItemTitle>
            <SpecsItemText>
              От 5А до 5000А (первичные), 1А, 5А (вторичные)
            </SpecsItemText>
          </SpecsItem>
          <SpecsItem>
            <SpecsItemTitle>Номинальные напряжения ТН</SpecsItemTitle>
            <SpecsItemText>
              От 0.38кВ до 35кВ (первичные), 100В, 110В (вторичные)
            </SpecsItemText>
          </SpecsItem>
          <SpecsItem>
            <SpecsItemTitle>Частотный диапазон</SpecsItemTitle>
            <SpecsItemText>
              50 Гц ± 2 Гц, 60 Гц ± 2 Гц
            </SpecsItemText>
          </SpecsItem>
          <SpecsItem>
            <SpecsItemTitle>Температурный диапазон</SpecsItemTitle>
            <SpecsItemText>
              От -40°C до +70°C (рабочий), от -60°C до +85°C (транспортировка)
            </SpecsItemText>
          </SpecsItem>
        </SpecsGrid>
      </TechnicalSpecs>

      <InfoBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <InfoBoxTitle>Преимущества нашей лаборатории</InfoBoxTitle>
        <InfoBoxText>
          Наша аккредитованная лаборатория оснащена современным оборудованием 
          и укомплектована квалифицированными специалистами.
        </InfoBoxText>
        <InfoBoxList>
          <InfoBoxItem>Аккредитация в области поверки трансформаторов</InfoBoxItem>
          <InfoBoxItem>Современное поверочное оборудование</InfoBoxItem>
          <InfoBoxItem>Опытные специалисты-метрологи</InfoBoxItem>
          <InfoBoxItem>Сертифицированные методики поверки</InfoBoxItem>
          <InfoBoxItem>Гарантия качества и сроков выполнения</InfoBoxItem>
          <InfoBoxItem>Полное документальное сопровождение</InfoBoxItem>
        </InfoBoxList>
      </InfoBox>

      <WarningBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <WarningIcon>
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </WarningIcon>
        <WarningContent>
          <WarningTitle>Важная информация</WarningTitle>
          <WarningText>
            Согласно требованиям ПУЭ и ГОСТ, трансформаторы тока и напряжения, 
            используемые в системах учета электроэнергии, подлежат обязательной 
            поверке. Межповерочный интервал составляет от 4 до 16 лет в зависимости 
            от типа и класса точности трансформатора. Рекомендуем своевременно 
            проводить поверку для обеспечения точности измерений и соответствия 
            требованиям энергоснабжающих организаций.
          </WarningText>
        </WarningContent>
      </WarningBox>

      <DocumentSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
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
              <DocumentText>Паспорт трансформатора</DocumentText>
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
              <DocumentText>Сертификат поверки (если есть)</DocumentText>
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
              <DocumentText>Техническое задание</DocumentText>
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
              <DocumentText>Протокол поверки</DocumentText>
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
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <ContactTitle>Готовы заказать поверку трансформаторов?</ContactTitle>
        <ContactText>
          Свяжитесь с нами для получения подробной консультации и расчета стоимости. 
          Наши специалисты помогут подобрать оптимальное решение для ваших задач.
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

export default TransformerVerificationPage; 