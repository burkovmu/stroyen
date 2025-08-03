import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCertificate, 
  faDownload, 
  faSearch, 
  faFilter,
  faAward,
  faShieldAlt,
  faCheckCircle,
  faFilePdf,
  faFileImage,
  faEye,
  faExternalLinkAlt,
  faCalendarAlt,
  faBuilding,
  faIndustry,
  faHome,
  faCog,
  faClipboardList,
  faExclamationTriangle,
  faInfoCircle,
  faArrowRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faUser,
  faTag,
  faChevronDown,
  faChevronRight,
  faStar,
  faMedal,
  faTrophy,
  faRibbon
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

const SearchSection = styled(motion.div)`
  margin-bottom: 3rem;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem 1rem 1.2rem 3rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1.1rem;
  color: #333333;
  background: #ffffff;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 3px rgba(47, 84, 131, 0.1);
  }
  
  &::placeholder {
    color: #999999;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999999;
  font-size: 1.1rem;
`;

const FiltersSection = styled(motion.div)`
  margin-bottom: 3rem;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: #ffffff;
  color: #666666;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #2f5483;
    color: #2f5483;
    background: rgba(47, 84, 131, 0.05);
  }

  &.active {
    background: #2f5483;
    color: white;
    border-color: #2f5483;
  }
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

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CertificateCard = styled(motion.div)`
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

const CertificateHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CertificateIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const CertificateInfo = styled.div`
  flex: 1;
`;

const CertificateTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const CertificateDescription = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const CertificateMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #999999;
  font-size: 0.85rem;
`;

const CertificateTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  padding: 0.3rem 0.8rem;
  background: rgba(47, 84, 131, 0.1);
  color: #2f5483;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const CertificateActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ActionButton = styled(motion.button)`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.primary {
    background: #2f5483;
    color: white;

    &:hover {
      background: #1a2f4b;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: transparent;
    color: #2f5483;
    border: 1px solid #2f5483;

    &:hover {
      background: #2f5483;
      color: white;
    }
  }
`;

const CategorySection = styled(motion.div)`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CategoryIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
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

function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({
    quality: true,
    safety: true,
    compliance: true,
    awards: true
  });

  const handleContactClick = () => {
    console.log('Контактная информация');
  };

  const handleApplicationClick = () => {
    console.log('Отправить заявку');
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const certificates = [
    {
      id: 1,
      title: 'Сертификат соответствия ГОСТ Р',
      description: 'Сертификат соответствия требованиям государственных стандартов Российской Федерации',
      category: 'compliance',
      fileType: 'pdf',
      fileSize: '1.2 MB',
      issuer: 'Росстандарт',
      validUntil: '2025-12-31',
      tags: ['ГОСТ', 'соответствие', 'стандарты'],
      status: 'active'
    },
    {
      id: 2,
      title: 'Сертификат системы менеджмента качества ISO 9001',
      description: 'Международный сертификат системы менеджмента качества',
      category: 'quality',
      fileType: 'pdf',
      fileSize: '2.1 MB',
      issuer: 'TÜV SÜD',
      validUntil: '2026-06-15',
      tags: ['ISO 9001', 'качество', 'менеджмент'],
      status: 'active'
    },
    {
      id: 3,
      title: 'Сертификат экологического менеджмента ISO 14001',
      description: 'Сертификат системы экологического менеджмента',
      category: 'quality',
      fileType: 'pdf',
      fileSize: '1.8 MB',
      issuer: 'Bureau Veritas',
      validUntil: '2025-09-30',
      tags: ['ISO 14001', 'экология', 'менеджмент'],
      status: 'active'
    },
    {
      id: 4,
      title: 'Сертификат безопасности труда OHSAS 18001',
      description: 'Сертификат системы управления охраной труда и промышленной безопасностью',
      category: 'safety',
      fileType: 'pdf',
      fileSize: '1.5 MB',
      issuer: 'SGS',
      validUntil: '2025-03-20',
      tags: ['OHSAS 18001', 'безопасность', 'охрана труда'],
      status: 'active'
    },
    {
      id: 5,
      title: 'Сертификат пожарной безопасности',
      description: 'Сертификат соответствия требованиям пожарной безопасности',
      category: 'safety',
      fileType: 'pdf',
      fileSize: '0.9 MB',
      issuer: 'МЧС России',
      validUntil: '2024-12-31',
      tags: ['пожарная безопасность', 'МЧС', 'соответствие'],
      status: 'active'
    },
    {
      id: 6,
      title: 'Диплом "Лучший поставщик года"',
      description: 'Награда за высокое качество продукции и надежность поставок',
      category: 'awards',
      fileType: 'pdf',
      fileSize: '0.7 MB',
      issuer: 'Торгово-промышленная палата',
      validUntil: '2024-12-31',
      tags: ['награда', 'поставщик', 'качество'],
      status: 'active'
    },
    {
      id: 7,
      title: 'Сертификат энергетического менеджмента ISO 50001',
      description: 'Сертификат системы энергетического менеджмента',
      category: 'quality',
      fileType: 'pdf',
      fileSize: '1.6 MB',
      issuer: 'DNV GL',
      validUntil: '2026-01-15',
      tags: ['ISO 50001', 'энергетика', 'менеджмент'],
      status: 'active'
    },
    {
      id: 8,
      title: 'Сертификат информационной безопасности ISO 27001',
      description: 'Сертификат системы управления информационной безопасностью',
      category: 'compliance',
      fileType: 'pdf',
      fileSize: '1.3 MB',
      issuer: 'BSI Group',
      validUntil: '2025-08-10',
      tags: ['ISO 27001', 'информационная безопасность'],
      status: 'active'
    }
  ];

  const categories = {
    quality: { name: 'Сертификаты качества', icon: faAward },
    safety: { name: 'Сертификаты безопасности', icon: faShieldAlt },
    compliance: { name: 'Сертификаты соответствия', icon: faCheckCircle },
    awards: { name: 'Награды и дипломы', icon: faTrophy }
  };

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = activeFilter === 'all' || cert.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  const groupedCertificates = filteredCertificates.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>Сертификаты</PageTitle>
        <PageSubtitle>
          Полная база сертификатов качества, безопасности и соответствия. 
          Все сертификаты актуальны и подтверждают высокие стандарты нашей продукции.
        </PageSubtitle>
      </PageHeader>



      <SearchSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SearchContainer>
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Поиск по сертификатам..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
      </SearchSection>

      <FiltersSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <FiltersContainer>
          <FilterButton
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => setActiveFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faCertificate} />
            Все сертификаты
          </FilterButton>
          {Object.entries(categories).map(([key, category]) => (
            <FilterButton
              key={key}
              className={activeFilter === key ? 'active' : ''}
              onClick={() => setActiveFilter(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={category.icon} />
              {category.name}
            </FilterButton>
          ))}
        </FiltersContainer>
      </FiltersSection>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <SectionTitle>Сертификаты по категориям</SectionTitle>
        
        {Object.entries(groupedCertificates).map(([categoryKey, certs]) => (
          <CategorySection
            key={categoryKey}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <CategoryTitle
              onClick={() => toggleCategory(categoryKey)}
              style={{ cursor: 'pointer' }}
            >
              <CategoryIcon>
                <FontAwesomeIcon icon={categories[categoryKey].icon} />
              </CategoryIcon>
              {categories[categoryKey].name}
              <FontAwesomeIcon 
                icon={expandedCategories[categoryKey] ? faChevronDown : faChevronRight}
                style={{ marginLeft: 'auto', fontSize: '0.9rem' }}
              />
            </CategoryTitle>
            
            {expandedCategories[categoryKey] && (
              <CertificatesGrid>
                {certs.map((cert) => (
                  <CertificateCard
                    key={cert.id}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CertificateHeader>
                      <CertificateIcon>
                        <FontAwesomeIcon icon={faCertificate} />
                      </CertificateIcon>
                      <CertificateInfo>
                        <CertificateTitle>{cert.title}</CertificateTitle>
                        <CertificateDescription>{cert.description}</CertificateDescription>
                      </CertificateInfo>
                    </CertificateHeader>
                    
                    <CertificateMeta>
                      <MetaItem>
                        <FontAwesomeIcon icon={faBuilding} />
                        {cert.issuer}
                      </MetaItem>
                      <MetaItem>
                        <FontAwesomeIcon icon={faFilePdf} />
                        {cert.fileSize}
                      </MetaItem>
                    </CertificateMeta>
                    
                    <CertificateTags>
                      {cert.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </CertificateTags>
                    
                    <CertificateActions>
                      <ActionButton
                        className="primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faDownload} />
                        Скачать
                      </ActionButton>
                      <ActionButton
                        className="secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faEye} />
                        Просмотр
                      </ActionButton>
                    </CertificateActions>
                  </CertificateCard>
                ))}
              </CertificatesGrid>
            )}
          </CategorySection>
        ))}
      </Section>

      <InfoBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <InfoBoxTitle>Важная информация о сертификатах</InfoBoxTitle>
        <InfoBoxText>
          Все сертификаты регулярно обновляются и соответствуют актуальным требованиям 
          международных и российских стандартов качества и безопасности.
        </InfoBoxText>
        <InfoBoxList>
          <InfoBoxItem>Сертификаты обновляются в соответствии с новыми стандартами</InfoBoxItem>
          <InfoBoxItem>Все документы проверены и актуальны</InfoBoxItem>
          <InfoBoxItem>Поддержка международных и российских стандартов</InfoBoxItem>
          <InfoBoxItem>Бесплатное предоставление сертификатов клиентам</InfoBoxItem>
          <InfoBoxItem>Консультации по сертификации продукции</InfoBoxItem>
          <InfoBoxItem>Сопровождение процесса сертификации</InfoBoxItem>
        </InfoBoxList>
      </InfoBox>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <ContactTitle>Нужна информация о сертификатах?</ContactTitle>
        <ContactText>
          Наши специалисты помогут подобрать нужные сертификаты и ответят на все вопросы 
          по сертификации продукции и соответствию стандартам.
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
            <FontAwesomeIcon icon={faCertificate} />
            Заказать сертификацию
          </ContactButton>
        </ContactButtons>
      </ContactSection>
    </PageContainer>
  );
}

export default CertificatesPage; 