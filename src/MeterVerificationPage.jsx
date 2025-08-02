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
  faPaperPlane
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

function MeterVerificationPage() {
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
        <PageTitle>Поверка счетчиков электрической энергии</PageTitle>
        <PageSubtitle>
          Профессиональная поверка электросчетчиков с выдачей официальных документов. 
          Работаем с 2010 года, имеем все необходимые разрешения и аккредитацию.
        </PageSubtitle>
      </PageHeader>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle>Наши услуги по поверке</SectionTitle>
        
        <Grid>
          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faCertificate} />
            </CardIcon>
            <CardTitle>Официальная поверка</CardTitle>
            <CardText>
              Проводим поверку в соответствии с требованиями законодательства РФ 
              с выдачей официальных документов.
            </CardText>
            <FeatureList>
              <FeatureItem>Аккредитованная лаборатория</FeatureItem>
              <FeatureItem>Сертифицированное оборудование</FeatureItem>
              <FeatureItem>Официальные документы</FeatureItem>
              <FeatureItem>Регистрация в Госреестре</FeatureItem>
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
              Выполняем поверку на территории заказчика с использованием 
              мобильного оборудования.
            </CardText>
            <FeatureList>
              <FeatureItem>Выезд специалиста</FeatureItem>
              <FeatureItem>Мобильное оборудование</FeatureItem>
              <FeatureItem>Минимальные простои</FeatureItem>
              <FeatureItem>Удобство для клиента</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faClock} />
            </CardIcon>
            <CardTitle>Срочная поверка</CardTitle>
            <CardText>
              Выполняем срочную поверку в кратчайшие сроки для 
              критически важных объектов.
            </CardText>
            <FeatureList>
              <FeatureItem>Сроки от 1 дня</FeatureItem>
              <FeatureItem>Приоритетное обслуживание</FeatureItem>
              <FeatureItem>Круглосуточная поддержка</FeatureItem>
              <FeatureItem>Гарантия сроков</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faShieldAlt} />
            </CardIcon>
            <CardTitle>Техническое обслуживание</CardTitle>
            <CardText>
              Обеспечиваем техническое обслуживание и ремонт 
              электросчетчиков любой сложности.
            </CardText>
            <FeatureList>
              <FeatureItem>Диагностика неисправностей</FeatureItem>
              <FeatureItem>Ремонт и настройка</FeatureItem>
              <FeatureItem>Замена комплектующих</FeatureItem>
              <FeatureItem>Гарантия на работы</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionTitle>Процесс поверки</SectionTitle>
        
        <ProcessStep
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <StepNumber>1</StepNumber>
          <StepContent>
            <StepTitle>Заявка и консультация</StepTitle>
            <StepDescription>
              Оставляете заявку на сайте или по телефону. Наш специалист 
              консультирует по всем вопросам и согласовывает условия работы.
            </StepDescription>
            <StepDetails>
              <StepDetail>Бесплатная консультация</StepDetail>
              <StepDetail>Расчет стоимости</StepDetail>
              <StepDetail>Согласование сроков</StepDetail>
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
            <StepTitle>Подготовка и выезд</StepTitle>
            <StepDescription>
              Подготавливаем необходимое оборудование и документы. 
              Специалист выезжает на объект в согласованное время.
            </StepDescription>
            <StepDetails>
              <StepDetail>Проверка оборудования</StepDetail>
              <StepDetail>Подготовка документов</StepDetail>
              <StepDetail>Выезд специалиста</StepDetail>
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
            <StepTitle>Проведение поверки</StepTitle>
            <StepDescription>
              Выполняем все необходимые измерения и проверки в соответствии 
              с методиками поверки и требованиями нормативных документов.
            </StepDescription>
            <StepDetails>
              <StepDetail>Визуальный осмотр</StepDetail>
              <StepDetail>Электрические измерения</StepDetail>
              <StepDetail>Проверка точности</StepDetail>
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
            <StepTitle>Оформление документов</StepTitle>
            <StepDescription>
              Оформляем официальные документы о поверке и передаем их заказчику. 
              При необходимости регистрируем в Госреестре.
            </StepDescription>
            <StepDetails>
              <StepDetail>Сертификат поверки</StepDetail>
              <StepDetail>Протокол измерений</StepDetail>
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
        <SectionTitle>Типы счетчиков</SectionTitle>
        
        <Grid>
          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faLightbulb} />
            </CardIcon>
            <CardTitle>Однофазные счетчики</CardTitle>
            <CardText>
              Поверка однофазных электросчетчиков для жилых и коммерческих помещений.
            </CardText>
            <FeatureList>
              <FeatureItem>Счетчики Меркурий</FeatureItem>
              <FeatureItem>Счетчики Энергомера</FeatureItem>
              <FeatureItem>Счетчики Нева</FeatureItem>
              <FeatureItem>Импортные счетчики</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faCog} />
            </CardIcon>
            <CardTitle>Трехфазные счетчики</CardTitle>
            <CardText>
              Поверка трехфазных электросчетчиков для промышленных объектов.
            </CardText>
            <FeatureList>
              <FeatureItem>Счетчики АГАТ</FeatureItem>
              <FeatureItem>Счетчики Меркурий</FeatureItem>
              <FeatureItem>Счетчики Энергомера</FeatureItem>
              <FeatureItem>Специализированные счетчики</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faChartLine} />
            </CardIcon>
            <CardTitle>Многотарифные счетчики</CardTitle>
            <CardText>
              Поверка многотарифных электросчетчиков с функциями учета по зонам суток.
            </CardText>
            <FeatureList>
              <FeatureItem>Проверка тарифов</FeatureItem>
              <FeatureItem>Настройка расписания</FeatureItem>
              <FeatureItem>Проверка памяти</FeatureItem>
              <FeatureItem>Валидация данных</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faIndustry} />
            </CardIcon>
            <CardTitle>Промышленные счетчики</CardTitle>
            <CardText>
              Поверка высоковольтных и промышленных электросчетчиков.
            </CardText>
            <FeatureList>
              <FeatureItem>Высоковольтные счетчики</FeatureItem>
              <FeatureItem>Счетчики с ТТ и ТН</FeatureItem>
              <FeatureItem>Счетчики для АСКУЭ</FeatureItem>
              <FeatureItem>Специальные требования</FeatureItem>
            </FeatureList>
          </Card>
        </Grid>
      </Section>

      <InfoBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <InfoBoxTitle>Почему выбирают нас?</InfoBoxTitle>
        <InfoBoxText>
          Более 10 лет опыта в области поверки электросчетчиков. 
          Наша компания имеет все необходимые разрешения и аккредитацию.
        </InfoBoxText>
        <InfoBoxList>
          <InfoBoxItem>Аккредитованная лаборатория с современным оборудованием</InfoBoxItem>
          <InfoBoxItem>Опытные специалисты с профильным образованием</InfoBoxItem>
          <InfoBoxItem>Сертифицированные методики поверки</InfoBoxItem>
          <InfoBoxItem>Гарантия качества и сроков выполнения работ</InfoBoxItem>
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
            Согласно законодательству РФ, поверка электросчетчиков является обязательной 
            процедурой. Счетчики с истекшим межповерочным интервалом не могут использоваться 
            для коммерческого учета электроэнергии. Рекомендуем своевременно проводить поверку 
            для избежания штрафов и проблем с энергоснабжающими организациями.
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
              <DocumentText>Паспорт электросчетчика</DocumentText>
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
              <DocumentText>Договор на поверку</DocumentText>
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
        </DocumentList>
      </DocumentSection>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <ContactTitle>Готовы заказать поверку?</ContactTitle>
        <ContactText>
          Свяжитесь с нами для получения подробной консультации и расчета стоимости. 
          Наши специалисты ответят на все ваши вопросы и помогут выбрать оптимальное решение.
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

export default MeterVerificationPage; 