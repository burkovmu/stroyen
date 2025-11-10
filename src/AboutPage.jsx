import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faTrophy, 
  faUsers, 
  faChartLine, 
  faCertificate, 
  faHandshake,
  faLightbulb,
  faRocket,
  faHeart,
  faStar,
  faCheckCircle,
  faAward,
  faGlobe,
  faBuilding,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StatCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`;

const StatIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2f5483;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #666666;
  font-weight: 500;
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

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ValueCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(47, 84, 131, 0.15);
  }
`;

const ValueIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.8rem;
`;

const ValueTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;

const Timeline = styled.div`
  position: relative;
  margin: 4rem 0;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #2f5483, rgba(47, 84, 131, 0.3));
    transform: translateX(-50%);
    border-radius: 4px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;

const TimelineContent = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  width: 45%;
  position: relative;

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    transform: translateY(-50%);

    ${props => props.side === 'left' ? `
      right: -20px;
      border-left-color: #ffffff;
    ` : `
      left: -20px;
      border-right-color: #ffffff;
    `}

    @media (max-width: 768px) {
      left: -20px;
      border-right-color: #ffffff;
      border-left-color: transparent;
    }
  }
`;

const TimelineYear = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: #2f5483;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 0 4px #ffffff, 0 0 0 8px rgba(47, 84, 131, 0.2);

  @media (max-width: 768px) {
    left: 20px;
  }
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

const CompanyInfoContainer = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto 3rem;
  background: #ffffff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 12px 40px rgba(47, 84, 131, 0.12);
  border: 1px solid rgba(47, 84, 131, 0.08);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CompanyParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.75;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
`;

const CompanyList = styled.ul`
  margin: 1.5rem 0 2rem;
  padding-left: 1.5rem;
  display: grid;
  gap: 0.75rem;
`;

const CompanyListItem = styled.li`
  font-size: 1.05rem;
  line-height: 1.65;
  color: #4a4a4a;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 0.65rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2f5483;
  }
`;

function AboutPage() {
  const [activeTab, setActiveTab] = useState('about');

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
        <PageTitle>Энергетические решения</PageTitle>
        <PageSubtitle>
          Мы создаём комплексные решения по учёту и распределению электроэнергии для предприятий, девелоперов и управляющих компаний.
          Сопровождаем проекты на всех этапах: от аудита и подбора оборудования до монтажа, пусконаладки и сервисной поддержки.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>О компании</SectionTitle>
        <CompanyInfoContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <CompanyParagraph>
            Компания «Стройэнергетика» уже более 10 лет поставляет и внедряет решения в сфере энергетики и автоматизации. Мы помогаем предприятиям, управляющим компаниям и частным заказчикам оптимизировать энергопотребление, обеспечивая полный цикл — от консультации до внедрения и сопровождения.
          </CompanyParagraph>
          <CompanyParagraph>
            Мы являемся официальным партнёром ведущих производителей и работаем исключительно с сертифицированным оборудованием. Это гарантирует соответствие продукции актуальным стандартам, точность показаний и безопасную эксплуатацию.
          </CompanyParagraph>
          <CompanyParagraph>Основные направления деятельности:</CompanyParagraph>
          <CompanyList>
            <CompanyListItem>поставка и продажа энергетического и электротехнического оборудования;</CompanyListItem>
            <CompanyListItem>установка и подключение комплексных систем «под ключ»;</CompanyListItem>
            <CompanyListItem>проектирование и внедрение автоматизированных систем учёта и управления энергоресурсами;</CompanyListItem>
            <CompanyListItem>техническое обслуживание и сервисная поддержка реализованных решений;</CompanyListItem>
            <CompanyListItem>экспертные консультации и подбор оптимальных технологий под задачи клиента.</CompanyListItem>
          </CompanyList>
          <CompanyParagraph>
            Выбирая нас, клиенты получают не просто оборудование, а готовое инженерное решение, позволяющее эффективно использовать энергоресурсы и снижать издержки.
          </CompanyParagraph>
          <CompanyParagraph>
            Мы работаем напрямую с производителями, предлагаем выгодные условия, короткие сроки поставки и гибкий подход к каждому проекту.
          </CompanyParagraph>
          <CompanyParagraph>
            Команда «Стройэнергетики» — это опытные специалисты, которые внимательно следят за развитием отрасли и расширяют линейку продукции. Благодаря этому наши клиенты всегда получают доступ к современным, энергоэффективным и точным решениям.
          </CompanyParagraph>
          <CompanyParagraph>
            Мы реализуем проекты по всей России и готовы предложить индивидуальные условия для постоянных партнёров, строительных компаний и промышленных предприятий.
          </CompanyParagraph>
          <CompanyParagraph>
            «Стройэнергетика» — ваш надёжный поставщик и партнёр в сфере энергоучёта и автоматизации. С нами вы уверены в качестве оборудования, стабильности работы систем и экспертной поддержке на каждом этапе.
          </CompanyParagraph>
        </CompanyInfoContainer>
      </Section>

      <Section>
        <SectionTitle>Наши достижения</SectionTitle>
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faTrophy} />
            </StatIcon>
            <StatNumber>10+</StatNumber>
            <StatLabel>Лет опыта</StatLabel>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faUsers} />
            </StatIcon>
            <StatNumber>5000+</StatNumber>
            <StatLabel>Довольных клиентов</StatLabel>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faCertificate} />
            </StatIcon>
            <StatNumber>50+</StatNumber>
            <StatLabel>Производителей</StatLabel>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faShieldAlt} />
            </StatIcon>
            <StatNumber>Гарантия</StatNumber>
            <StatLabel>На всё оборудование</StatLabel>
          </StatCard>
        </StatsGrid>
      </Section>

      <Section>
        <SectionTitle>О нас</SectionTitle>
        <ContentGrid>
          <ContentCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FontAwesomeIcon icon={faBuilding} />
              Наша миссия
            </CardTitle>
            <CardText>
              Мы стремимся обеспечить наших клиентов высококачественными счетчиками электроэнергии 
              от ведущих производителей, предоставляя полный спектр услуг от консультации до установки 
              и технического обслуживания.
            </CardText>
            <CardText>
              Наша цель - сделать процесс выбора и установки счетчиков максимально простым и надежным 
              для каждого клиента, обеспечивая экономию средств и повышение эффективности энергопотребления.
            </CardText>
          </ContentCard>

          <ContentCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FontAwesomeIcon icon={faHandshake} />
              Наши принципы
            </CardTitle>
            <CardText>
              Мы работаем только с официальными дилерами и производителями, гарантируя подлинность 
              каждого продукта и соблюдение всех стандартов качества.
            </CardText>
            <CardText>
              Наша команда состоит из опытных специалистов, которые постоянно повышают свою квалификацию 
              и следят за новейшими технологиями в области энергетики.
            </CardText>
          </ContentCard>
        </ContentGrid>
      </Section>

      <Section>
        <SectionTitle>Наши ценности</SectionTitle>
        <ValuesGrid>
          <ValueCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ValueIcon>
              <FontAwesomeIcon icon={faShieldAlt} />
            </ValueIcon>
            <ValueTitle>Надежность</ValueTitle>
            <ValueDescription>
              Мы гарантируем качество каждого продукта и предоставляем максимальную гарантию на все оборудование.
            </ValueDescription>
          </ValueCard>

          <ValueCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ValueIcon>
              <FontAwesomeIcon icon={faLightbulb} />
            </ValueIcon>
            <ValueTitle>Инновации</ValueTitle>
            <ValueDescription>
              Мы постоянно следим за новейшими технологиями и предлагаем современные решения для наших клиентов.
            </ValueDescription>
          </ValueCard>

          <ValueCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ValueIcon>
              <FontAwesomeIcon icon={faHeart} />
            </ValueIcon>
            <ValueTitle>Забота о клиентах</ValueTitle>
            <ValueDescription>
              Мы всегда готовы помочь с выбором оптимального решения и предоставить профессиональную консультацию.
            </ValueDescription>
          </ValueCard>

          <ValueCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ValueIcon>
              <FontAwesomeIcon icon={faStar} />
            </ValueIcon>
            <ValueTitle>Качество</ValueTitle>
            <ValueDescription>
              Мы работаем только с проверенными производителями и гарантируем соответствие всем стандартам.
            </ValueDescription>
          </ValueCard>
        </ValuesGrid>
      </Section>

      <Section>
        <SectionTitle>Как мы работаем</SectionTitle>
        <Timeline>
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TimelineDot />
            <TimelineContent side="left">
              <TimelineYear>Шаг 1</TimelineYear>
              <TimelineTitle>Анализ задач</TimelineTitle>
              <TimelineDescription>
                Выясняем специфику объекта и потребности клиента, подбираем оптимальные технологии.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TimelineDot />
            <TimelineContent side="right">
              <TimelineYear>Шаг 2</TimelineYear>
              <TimelineTitle>Подбор оборудования</TimelineTitle>
              <TimelineDescription>
                Предлагаем сертифицированные решения от проверенных производителей.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TimelineDot />
            <TimelineContent side="left">
              <TimelineYear>Шаг 3</TimelineYear>
              <TimelineTitle>Поставка и логистика</TimelineTitle>
              <TimelineDescription>
                Организуем поставку в оговорённые сроки, держим клиента в курсе статуса.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TimelineDot />
            <TimelineContent side="right">
              <TimelineYear>Шаг 4</TimelineYear>
              <TimelineTitle>Монтаж и запуск</TimelineTitle>
              <TimelineDescription>
                Выполняем установку, подключение и пусконаладку «под ключ».
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TimelineDot />
            <TimelineContent side="right">
              <TimelineYear>Шаг 5</TimelineYear>
              <TimelineTitle>Сервис и сопровождение</TimelineTitle>
              <TimelineDescription>
                Обеспечиваем техническое обслуживание, консультации и поддержку 24/7.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactTitle>Готовы к сотрудничеству?</ContactTitle>
        <ContactText>
          Свяжитесь с нами для получения профессиональной консультации по выбору счетчиков электроэнергии 
          и расчета стоимости установки. Наши специалисты готовы помочь вам 24/7.
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

export default AboutPage; 