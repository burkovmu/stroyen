import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faBolt,
  faClipboardList,
  faShieldAlt,
  faTools,
  faGaugeHigh,
  faFileAlt,
  faCheckCircle,
  faPhone,
  faPaperPlane,
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
  max-width: 720px;
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

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 24px rgba(47, 84, 131, 0.12);
  border: 1px solid rgba(47, 84, 131, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const FeatureText = styled.p`
  color: #666666;
  line-height: 1.6;
  margin: 0;
`;

const ToggleGroup = styled.div`
  display: inline-flex;
  background: rgba(47, 84, 131, 0.08);
  padding: 0.3rem;
  border-radius: 12px;
  margin: 0 auto 2.5rem;
`;

const ToggleButton = styled.button`
  border: none;
  background: ${({ active }) => (active ? '#ffffff' : 'transparent')};
  color: ${({ active }) => (active ? '#2f5483' : '#4a657f')};
  padding: 0.9rem 1.6rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.25s ease;

  &:hover {
    color: #2f5483;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 18px;
  padding: 2.5rem;
  box-shadow: 0 8px 28px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
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
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(47, 84, 131, 0.12);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f5483;
  font-size: 1.6rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const ServiceText = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #4a657f;
  font-size: 0.97rem;

  svg {
    color: #2f5483;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
`;

const ProcessCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.2rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(47, 84, 131, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.05);
`;

const ProcessNumber = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 auto 1rem;
`;

const ProcessTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.8rem;
`;

const ProcessText = styled.p`
  color: #666666;
  line-height: 1.6;
  margin: 0;
`;

const DocumentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const DocumentsCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 20px rgba(47, 84, 131, 0.08);
  border: 1px solid rgba(47, 84, 131, 0.05);
`;

const DocumentsTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ContactSection = styled(motion.div)`
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.08)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.08)"/><circle cx="90" cy="90" r="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="10" cy="60" r="1" fill="rgba(255,255,255,0.08)"/></svg>');
    opacity: 0.4;
  }
`;

const ContactTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  position: relative;
  z-index: 2;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.95;
  position: relative;
  z-index: 2;
`;

const ContactActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
`;

const ContactButton = styled(motion.button)`
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.3s ease;
  background: ${({ variant }) => (variant === 'secondary' ? 'transparent' : 'white')};
  color: ${({ variant }) => (variant === 'secondary' ? 'white' : '#2f5483')};
  border: ${({ variant }) => (variant === 'secondary' ? '2px solid rgba(255,255,255,0.7)' : 'none')};

  &:hover {
    transform: translateY(-2px);
    background: ${({ variant }) => (variant === 'secondary' ? 'rgba(255,255,255,0.12)' : '#f0f4f9')};
  }
`;

const VerificationServicesPage = () => {
  const [activeService, setActiveService] = useState('meters');

  const serviceContent = {
    meters: [
      {
        icon: faLightbulb,
        title: 'Поверка электросчетчиков',
        description:
          'Однофазные и трехфазные счетчики для жилых, коммерческих и промышленных объектов.',
        items: [
          'Аккредитованная лаборатория и выездная поверка',
          'Проверка точности, диагностика и настройка',
          'Работаем с Меркурий, Энергомера, Нева, АГАТ и др.',
        ],
      },
      {
        icon: faGaugeHigh,
        title: 'Многотарифные системы',
        description:
          'Настройка и поверка счетчиков с учетом зонных тарифов и интеграции в АСКУЭ.',
        items: [
          'Контроль тарифных расписаний и показаний',
          'Проверка памяти, коммуникации и пломб',
          'Регистрация результатов в реестре',
        ],
      },
    ],
    transformers: [
      {
        icon: faBolt,
        title: 'Трансформаторы тока',
        description:
          'Поверка трансформаторов тока всех классов точности для систем учета и защиты.',
        items: [
          'Проверка погрешностей и угловых характеристик',
          'Испытание изоляции и калибровка цепей',
          'Первичные токи до 5000 А, вторичные 1/5 А',
        ],
      },
      {
        icon: faTools,
        title: 'Трансформаторы напряжения',
        description:
          'Комплексная поверка трансформаторов напряжения до 35 кВ, включая цифровые модели.',
        items: [
          'Диэлектрические испытания и проверка угловых погрешностей',
          'Мобильная лаборатория для выездных работ',
          'Документальное сопровождение и сертификация',
        ],
      },
    ],
  };

  const documents = [
    {
      title: 'Для поверки счетчиков',
      items: [
        'Паспорт и предыдущий сертификат поверки (если есть)',
        'Договор или заявка на проведение работ',
        'Доступ к прибору учета и схеме подключения',
      ],
    },
    {
      title: 'Для поверки трансформаторов',
      items: [
        'Паспорт трансформатора тока/напряжения',
        'Техническое задание или спецификация объекта',
        'Протоколы предыдущих испытаний (при наличии)',
      ],
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>Поверка электроизмерительного оборудования</PageTitle>
        <PageSubtitle>
          Все услуги поверки электроизмерительного оборудования собраны в одном месте. Выберите
          решение для электросчетчиков или трансформаторов и получите консультацию специалистов.
        </PageSubtitle>
      </PageHeader>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle>Почему это удобно</SectionTitle>
        <FeatureGrid>
          <FeatureCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <FeatureIcon>
              <FontAwesomeIcon icon={faShieldAlt} />
            </FeatureIcon>
            <FeatureTitle>Аккредитованная лаборатория</FeatureTitle>
            <FeatureText>
              Проводим поверку по утверждённым методикам, используем сертифицированное оборудование и
              выдаём официальные документы.
            </FeatureText>
          </FeatureCard>
          <FeatureCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <FeatureIcon>
              <FontAwesomeIcon icon={faClipboardList} />
            </FeatureIcon>
            <FeatureTitle>Продуманная организация</FeatureTitle>
            <FeatureText>
              Помогаем подготовить комплект документов, планируем график работ и сопровождаем вас на
              каждом этапе поверки.
            </FeatureText>
          </FeatureCard>
          <FeatureCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <FeatureIcon>
              <FontAwesomeIcon icon={faTools} />
            </FeatureIcon>
            <FeatureTitle>Полный цикл услуг</FeatureTitle>
            <FeatureText>
              Выполняем диагностику, настройку, поверку и регистрацию результатов для отдельных
              приборов и целых объектов.
            </FeatureText>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionTitle>Наши направления</SectionTitle>
        <ToggleGroup>
          <ToggleButton active={activeService === 'meters'} onClick={() => setActiveService('meters')}>
            <FontAwesomeIcon icon={faLightbulb} />
            Счетчики
          </ToggleButton>
          <ToggleButton
            active={activeService === 'transformers'}
            onClick={() => setActiveService('transformers')}
          >
            <FontAwesomeIcon icon={faBolt} />
            Трансформаторы
          </ToggleButton>
        </ToggleGroup>

        <ServiceGrid>
          {serviceContent[activeService].map((card) => (
            <ServiceCard
              key={card.title}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceHeader>
                <ServiceIcon>
                  <FontAwesomeIcon icon={card.icon} />
                </ServiceIcon>
                <ServiceTitle>{card.title}</ServiceTitle>
              </ServiceHeader>
              <ServiceText>{card.description}</ServiceText>
              <List>
                {card.items.map((item) => (
                  <ListItem key={item}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {item}
                  </ListItem>
                ))}
              </List>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SectionTitle>Процесс работы</SectionTitle>
        <ProcessGrid>
          {[
            {
              number: '1',
              title: 'Заявка и консультация',
              text: 'Анализируем ваши задачи, согласовываем перечень оборудования и сроки работ.',
            },
            {
              number: '2',
              title: 'Подготовка и выезд',
              text: 'Формируем команду и документы, организуем выезд мобильной лаборатории.',
            },
            {
              number: '3',
              title: 'Поверка и испытания',
              text: 'Проводим измерения, фиксируем результаты и при необходимости выполняем настройку.',
            },
            {
              number: '4',
              title: 'Документы и сопровождение',
              text: 'Передаем протоколы и сертификаты, регистрируем результаты и консультируем по итогам.',
            },
          ].map((step) => (
            <ProcessCard key={step.number} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <ProcessNumber>{step.number}</ProcessNumber>
              <ProcessTitle>{step.title}</ProcessTitle>
              <ProcessText>{step.text}</ProcessText>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <SectionTitle>Что подготовить</SectionTitle>
        <DocumentsWrapper>
          {documents.map((group) => (
            <DocumentsCard key={group.title} whileHover={{ translateY: -4 }} transition={{ duration: 0.3 }}>
              <DocumentsTitle>
                <FontAwesomeIcon icon={faFileAlt} />
                {group.title}
              </DocumentsTitle>
              <List>
                {group.items.map((item) => (
                  <ListItem key={item}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {item}
                  </ListItem>
                ))}
              </List>
            </DocumentsCard>
          ))}
        </DocumentsWrapper>
      </Section>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <ContactTitle>Нужна поверка оборудования?</ContactTitle>
        <ContactText>
          Оставьте заявку — уточним детали, подготовим документы и подберём удобный формат
          проведения поверки для вашего оборудования.
        </ContactText>
        <ContactActions>
          <ContactButton whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <FontAwesomeIcon icon={faPhone} />
            Заказать консультацию
          </ContactButton>
          <ContactButton
            variant="secondary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Отправить заявку
          </ContactButton>
        </ContactActions>
      </ContactSection>
    </PageContainer>
  );
};

export default VerificationServicesPage;

