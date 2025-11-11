import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faBuilding, 
  faIndustry,
  faGlobe,
  faStar,
  faAward,
  faCheckCircle,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faArrowRight,
  faHeart,
  faTrophy,
  faMedal,
  faCertificate,
  faHandshakeAngle
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

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PartnerCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;

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

const PartnerLogo = styled.div`
  width: 180px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  overflow: hidden;
`;

const PartnerLogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PartnerName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const PartnerDescription = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const PartnerCountry = styled.div`
  color: #999999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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

const StatsSection = styled(motion.div)`
  margin-bottom: 4rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(47, 84, 131, 0.15);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666666;
  font-size: 1rem;
  font-weight: 500;
`;

function PartnersPage() {
  const handleContactClick = () => {
    console.log('Контактная информация');
  };

  const handleApplicationClick = () => {
    console.log('Отправить заявку');
  };

  const allPartners = [
    {
      id: 1,
      name: 'Энергомера',
      description: 'Ведущий российский производитель электросчетчиков и систем учета электроэнергии',
      country: 'Россия',
      website: 'https://www.energomera.ru'
    },
    {
      id: 2,
      name: 'Меркурий',
      description: 'Производитель высококачественных электросчетчиков и приборов учета',
      country: 'Россия',
      website: 'https://www.incotex.ru'
    },
    {
      id: 3,
      name: 'НЕВА',
      description: 'Санкт-Петербургский завод по производству электросчетчиков',
      country: 'Россия',
      website: 'https://www.neva.ru'
    },
    {
      id: 4,
      name: 'АГАТ',
      description: 'Производитель трансформаторов тока и напряжения',
      country: 'Россия',
      website: 'https://www.agat.ru'
    },
    {
      id: 5,
      name: 'Электротехническая компания',
      description: 'Дистрибьютор электрооборудования и компонентов',
      country: 'Россия',
      website: 'https://www.electrotech.ru'
    },
    {
      id: 6,
      name: 'ТехСервис',
      description: 'Сервисная компания по обслуживанию электрооборудования',
      country: 'Россия',
      website: 'https://www.techservice.ru'
    },
    {
      id: 7,
      name: 'SmartGrid Solutions',
      description: 'Разработчик интеллектуальных систем управления энергосетями',
      country: 'Германия',
      website: 'https://www.smartgrid.de'
    },
    {
      id: 8,
      name: 'PowerTech Systems',
      description: 'Производитель систем мониторинга и контроля энергопотребления',
      country: 'США',
      website: 'https://www.powertech.com'
    }
  ];

  const featuredPartners = [
    ...allPartners
      .filter((partner) => partner.name === 'АГАТ')
      .map((partner) => ({
        ...partner,
        logo: '/images/partners/agat.jpg'
      })),
    {
      id: 'mars-energo',
      name: 'МАРС ЭНЕРГО',
      description: 'Инжиниринговая компания, специализирующаяся на решениях для энергетики и промышленной автоматизации',
      country: 'Россия',
      website: 'https://marsenergo.ru',
      logo: '/images/partners/mars-energo.png'
    }
  ];

  const partners = featuredPartners;
  // Для возврата к исходному списку партнеров замените featuredPartners на allPartners.

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>Партнеры</PageTitle>
        <PageSubtitle>
          Наши надежные партнеры - ведущие производители и поставщики электрооборудования. 
          Долгосрочное сотрудничество обеспечивает высокое качество продукции и сервиса.
        </PageSubtitle>
      </PageHeader>

      <StatsSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <StatsGrid>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faHandshake} />
            </StatIcon>
            <StatNumber>20+</StatNumber>
            <StatLabel>Партнеров</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faGlobe} />
            </StatIcon>
            <StatNumber>5</StatNumber>
            <StatLabel>Стран</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faStar} />
            </StatIcon>
            <StatNumber>10+</StatNumber>
            <StatLabel>Лет сотрудничества</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faAward} />
            </StatIcon>
            <StatNumber>100%</StatNumber>
            <StatLabel>Надежность</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionTitle>Наши партнеры</SectionTitle>
        
        <PartnersGrid>
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <PartnerLogo>
                {partner.logo ? (
                  <PartnerLogoImage
                    src={partner.logo}
                    alt={`Логотип ${partner.name}`}
                    loading="lazy"
                  />
                ) : (
                  partner.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                )}
              </PartnerLogo>
              <PartnerName>{partner.name}</PartnerName>
              <PartnerDescription>{partner.description}</PartnerDescription>
              <PartnerCountry>
                <FontAwesomeIcon icon={faGlobe} />
                {partner.country}
              </PartnerCountry>
            </PartnerCard>
          ))}
        </PartnersGrid>
      </Section>

      <InfoBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <InfoBoxTitle>Преимущества партнерства</InfoBoxTitle>
        <InfoBoxText>
          Долгосрочное сотрудничество с ведущими производителями обеспечивает 
          высокое качество продукции и надежность поставок для наших клиентов.
        </InfoBoxText>
        <InfoBoxList>
          <InfoBoxItem>Прямые поставки от производителей</InfoBoxItem>
          <InfoBoxItem>Гарантированное качество продукции</InfoBoxItem>
          <InfoBoxItem>Конкурентные цены и условия</InfoBoxItem>
          <InfoBoxItem>Техническая поддержка от партнеров</InfoBoxItem>
          <InfoBoxItem>Сервисное обслуживание оборудования</InfoBoxItem>
          <InfoBoxItem>Инновационные решения и технологии</InfoBoxItem>
        </InfoBoxList>
      </InfoBox>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <ContactTitle>Хотите стать нашим партнером?</ContactTitle>
        <ContactText>
          Мы всегда открыты для новых партнерств с надежными производителями 
          и поставщиками качественного электрооборудования.
        </ContactText>
        <ContactButtons>
          <ContactButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
          >
            <FontAwesomeIcon icon={faPhone} />
            Обсудить сотрудничество
          </ContactButton>
          <ContactButton
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleApplicationClick}
          >
            <FontAwesomeIcon icon={faHandshake} />
            Отправить заявку
          </ContactButton>
        </ContactButtons>
      </ContactSection>
    </PageContainer>
  );
}

export default PartnersPage; 