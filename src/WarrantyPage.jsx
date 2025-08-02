import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faTools, 
  faCheckCircle, 
  faClock, 
  faPhone, 
  faEnvelope,
  faUser,
  faCertificate,
  faHandshake,
  faPaperPlane,
  faExclamationTriangle,
  faInfoCircle,
  faWrench,
  faCog,
  faClipboardList,
  faFileAlt,
  faCalendarAlt,
  faMapMarkerAlt,
  faBuilding,
  faHeadset
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
    background: linear-gradient(to right, #2f5483, rgba(47, 84, 131, 0.3));
    border-radius: 4px;
  }
`;

const WarrantyTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const WarrantyTypeCard = styled(motion.div)`
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

const TypeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const TypeIcon = styled.div`
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

const TypeTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2f5483;
  margin: 0;
`;

const TypeDuration = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const TypeDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TypeFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TypeFeature = styled.li`
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

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled(motion.div)`
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

const ServiceIcon = styled.div`
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

const ServiceTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
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

function WarrantyPage() {
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
        <PageTitle>Гарантия и сервис</PageTitle>
        <PageSubtitle>
          Максимальная гарантия на все счетчики электроэнергии до 16 лет. 
          Профессиональное обслуживание и ремонт оборудования с выездом на место.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Виды гарантии</SectionTitle>
        <WarrantyTypesGrid>
          <WarrantyTypeCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TypeHeader>
              <TypeIcon>
                <FontAwesomeIcon icon={faShieldAlt} />
              </TypeIcon>
              <TypeTitle>Стандартная гарантия</TypeTitle>
            </TypeHeader>
            <TypeDuration>2-5 лет</TypeDuration>
            <TypeDescription>
              Базовая гарантия производителя на все счетчики электроэнергии.
            </TypeDescription>
            <TypeFeatures>
              <TypeFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Бесплатный ремонт
              </TypeFeature>
              <TypeFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Замена неисправных деталей
              </TypeFeature>
              <TypeFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Техническая поддержка
              </TypeFeature>
            </TypeFeatures>
          </WarrantyTypeCard>

          <WarrantyTypeCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <TypeHeader>
              <TypeIcon>
                <FontAwesomeIcon icon={faCertificate} />
              </TypeIcon>
              <TypeTitle>Расширенная гарантия</TypeTitle>
            </TypeHeader>
            <TypeDuration>8-12 лет</TypeDuration>
            <TypeDescription>
              Дополнительная гарантия на счетчики премиум-класса с расширенным покрытием.
            </TypeDescription>
            <TypeFeatures>
              <TypeFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Полный ремонт и обслуживание
              </TypeFeature>
              <TypeFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Выезд специалиста на место
              </TypeFeature>
              <TypeFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Приоритетная поддержка
              </TypeFeature>
            </TypeFeatures>
          </WarrantyTypeCard>

          <WarrantyTypeCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TypeHeader>
              <TypeIcon>
                <FontAwesomeIcon icon={faHandshake} />
              </TypeIcon>
              <TypeTitle>Максимальная гарантия</TypeTitle>
            </TypeHeader>
            <TypeDuration>16 лет</TypeDuration>
            <TypeDescription>
              Максимальная гарантия на профессиональное оборудование с полным сервисным обслуживанием.
            </TypeDescription>
            <TypeFeatures>
              <TypeFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Полная замена оборудования
              </TypeFeature>
              <TypeFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Круглосуточная поддержка
              </TypeFeature>
              <TypeFeature>
                <FontAwesomeIcon icon={faCheckCircle} />
                Плановое обслуживание
              </TypeFeature>
            </TypeFeatures>
          </WarrantyTypeCard>
        </WarrantyTypesGrid>
      </Section>

      <Section>
        <SectionTitle>Процесс гарантийного обслуживания</SectionTitle>
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
              Связываетесь с нами по телефону или через форму на сайте для регистрации обращения.
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
            <ProcessTitle>Диагностика</ProcessTitle>
            <ProcessDescription>
              Наши специалисты проводят диагностику оборудования для выявления причины неисправности.
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
              <FontAwesomeIcon icon={faTools} />
            </ProcessIcon>
            <ProcessTitle>Ремонт</ProcessTitle>
            <ProcessDescription>
              Выполняем ремонт или замену неисправных компонентов в кратчайшие сроки.
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
            <ProcessTitle>Тестирование</ProcessTitle>
            <ProcessDescription>
              Проводим тестирование отремонтированного оборудования и выдаем акт выполненных работ.
            </ProcessDescription>
          </ProcessCard>
        </ProcessGrid>
      </Section>

      <Section>
        <SectionTitle>Сервисные услуги</SectionTitle>
        <ServiceGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <FontAwesomeIcon icon={faWrench} />
            </ServiceIcon>
            <ServiceTitle>Ремонт оборудования</ServiceTitle>
            <ServiceDescription>
              Профессиональный ремонт счетчиков электроэнергии любой сложности с использованием оригинальных запчастей.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <FontAwesomeIcon icon={faCog} />
            </ServiceIcon>
            <ServiceTitle>Техническое обслуживание</ServiceTitle>
            <ServiceDescription>
              Плановое техническое обслуживание оборудования для предотвращения поломок и продления срока службы.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </ServiceIcon>
            <ServiceTitle>Выезд специалиста</ServiceTitle>
            <ServiceDescription>
              Выезд квалифицированного специалиста на место установки оборудования для диагностики и ремонта.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <FontAwesomeIcon icon={faHeadset} />
            </ServiceIcon>
            <ServiceTitle>Техническая поддержка</ServiceTitle>
            <ServiceDescription>
              Круглосуточная техническая поддержка по вопросам эксплуатации и обслуживания оборудования.
            </ServiceDescription>
          </ServiceCard>
        </ServiceGrid>
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
              Условия гарантии
            </CardTitle>
            <CardText>
              Гарантия распространяется на заводские дефекты и неисправности, возникшие в процессе нормальной эксплуатации. 
              Гарантийный срок исчисляется с момента продажи товара.
            </CardText>
            <CardText>
              Для получения гарантийного обслуживания необходимо предъявить гарантийный талон и документы о покупке. 
              Оборудование должно быть в исправном состоянии без механических повреждений.
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
              Что не покрывается гарантией
            </CardTitle>
            <CardText>
              Гарантия не распространяется на повреждения, возникшие в результате неправильной установки, 
              эксплуатации или хранения, а также на естественный износ компонентов.
            </CardText>
            <CardText>
              Не подлежат гарантийному обслуживанию изделия с механическими повреждениями, 
              следами вскрытия или попыток самостоятельного ремонта.
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
              <FontAwesomeIcon icon={faCalendarAlt} />
            </InfoIcon>
            <InfoTitle>Продление гарантии</InfoTitle>
            <InfoText>
              Возможность продления гарантийного срока на дополнительный период с расширенным покрытием.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faFileAlt} />
            </InfoIcon>
            <InfoTitle>Сервисные контракты</InfoTitle>
            <InfoText>
              Заключение сервисных контрактов на техническое обслуживание оборудования с фиксированной стоимостью.
            </InfoText>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <FontAwesomeIcon icon={faBuilding} />
            </InfoIcon>
            <InfoTitle>Корпоративное обслуживание</InfoTitle>
            <InfoText>
              Специальные условия для предприятий и организаций с большим количеством оборудования.
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
        <ContactTitle>Нужна помощь с гарантийным обслуживанием?</ContactTitle>
        <ContactText>
          Свяжитесь с нами для получения подробной информации о гарантийных условиях, 
          сервисном обслуживании или регистрации гарантийного случая. Наши специалисты готовы помочь!
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

export default WarrantyPage; 