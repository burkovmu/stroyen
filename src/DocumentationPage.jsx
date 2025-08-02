import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt, 
  faDownload, 
  faSearch, 
  faFilter,
  faBook,
  faFilePdf,
  faFileWord,
  faFileExcel,
  faFileImage,
  faFileArchive,
  faCalendarAlt,
  faUser,
  faBuilding,
  faIndustry,
  faHome,
  faCog,
  faShieldAlt,
  faCertificate,
  faClipboardList,
  faExclamationTriangle,
  faInfoCircle,
  faArrowRight,
  faExternalLinkAlt,
  faEye,
  faClock,
  faTag,
  faFolder,
  faFolderOpen,
  faChevronDown,
  faChevronRight,
  faPhone
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

const DocumentationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DocumentCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84,131, 0.05);
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

const DocumentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const DocumentIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2f5483, #1a2f4b);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const DocumentInfo = styled.div`
  flex: 1;
`;

const DocumentTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const DocumentDescription = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const DocumentMeta = styled.div`
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

const DocumentTags = styled.div`
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

const DocumentActions = styled.div`
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

function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({
    technical: true,
    legal: true,
    commercial: true,
    safety: true
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

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'pdf':
        return faFilePdf;
      case 'doc':
      case 'docx':
        return faFileWord;
      case 'xls':
      case 'xlsx':
        return faFileExcel;
      case 'jpg':
      case 'png':
      case 'gif':
        return faFileImage;
      case 'zip':
      case 'rar':
        return faFileArchive;
      default:
        return faFileAlt;
    }
  };

  const documents = [
    {
      id: 1,
      title: 'Технические условия на электроснабжение',
      description: 'Подробные технические условия для подключения электрооборудования к сети',
      category: 'technical',
      fileType: 'pdf',
      fileSize: '2.3 MB',
      date: '2024-01-15',
      author: 'Технический отдел',
      tags: ['электроснабжение', 'технические условия', 'подключение'],
      downloads: 156
    },
    {
      id: 2,
      title: 'Инструкция по монтажу электросчетчиков',
      description: 'Пошаговая инструкция по установке и подключению электросчетчиков',
      category: 'technical',
      fileType: 'pdf',
      fileSize: '1.8 MB',
      date: '2024-01-10',
      author: 'Инженерная служба',
      tags: ['монтаж', 'счетчики', 'инструкция'],
      downloads: 234
    },
    {
      id: 3,
      title: 'Договор на поставку оборудования',
      description: 'Типовой договор для закупки электрооборудования',
      category: 'commercial',
      fileType: 'docx',
      fileSize: '0.9 MB',
      date: '2024-01-08',
      author: 'Юридический отдел',
      tags: ['договор', 'поставка', 'коммерция'],
      downloads: 89
    },
    {
      id: 4,
      title: 'Сертификаты соответствия продукции',
      description: 'Сертификаты качества и соответствия на все виды оборудования',
      category: 'legal',
      fileType: 'pdf',
      fileSize: '4.1 MB',
      date: '2024-01-05',
      author: 'Отдел сертификации',
      tags: ['сертификаты', 'качество', 'соответствие'],
      downloads: 312
    },
    {
      id: 5,
      title: 'Правила техники безопасности',
      description: 'Основные правила безопасности при работе с электрооборудованием',
      category: 'safety',
      fileType: 'pdf',
      fileSize: '1.5 MB',
      date: '2024-01-12',
      author: 'Отдел охраны труда',
      tags: ['безопасность', 'техника безопасности', 'охрана труда'],
      downloads: 178
    },
    {
      id: 6,
      title: 'Каталог продукции 2024',
      description: 'Полный каталог электрооборудования с техническими характеристиками',
      category: 'commercial',
      fileType: 'pdf',
      fileSize: '8.7 MB',
      date: '2024-01-20',
      author: 'Маркетинговый отдел',
      tags: ['каталог', 'продукция', 'характеристики'],
      downloads: 445
    },
    {
      id: 7,
      title: 'Нормативные документы ПУЭ',
      description: 'Правила устройства электроустановок - актуальная версия',
      category: 'legal',
      fileType: 'pdf',
      fileSize: '3.2 MB',
      date: '2024-01-18',
      author: 'Технический отдел',
      tags: ['ПУЭ', 'нормативы', 'электроустановки'],
      downloads: 267
    },
    {
      id: 8,
      title: 'Инструкция по наладке АСКУЭ',
      description: 'Методические указания по настройке автоматизированных систем учета',
      category: 'technical',
      fileType: 'pdf',
      fileSize: '2.1 MB',
      date: '2024-01-14',
      author: 'Инженерная служба',
      tags: ['АСКУЭ', 'наладка', 'системы учета'],
      downloads: 134
    }
  ];

  const categories = {
    technical: { name: 'Техническая документация', icon: faCog },
    legal: { name: 'Нормативные документы', icon: faShieldAlt },
    commercial: { name: 'Коммерческие документы', icon: faBuilding },
    safety: { name: 'Безопасность', icon: faExclamationTriangle }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = activeFilter === 'all' || doc.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  const groupedDocuments = filteredDocuments.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {});

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>Документация</PageTitle>
        <PageSubtitle>
          Полная база технической, нормативной и коммерческой документации. 
          Все документы регулярно обновляются и соответствуют актуальным требованиям.
        </PageSubtitle>
      </PageHeader>

      <SearchSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <SearchContainer>
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Поиск по документам..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
      </SearchSection>

      <FiltersSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <FiltersContainer>
          <FilterButton
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => setActiveFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faBook} />
            Все документы
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
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SectionTitle>Документы по категориям</SectionTitle>
        
        {Object.entries(groupedDocuments).map(([categoryKey, docs]) => (
          <CategorySection
            key={categoryKey}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
              <DocumentationGrid>
                {docs.map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DocumentHeader>
                      <DocumentIcon>
                        <FontAwesomeIcon icon={getFileIcon(doc.fileType)} />
                      </DocumentIcon>
                      <DocumentInfo>
                        <DocumentTitle>{doc.title}</DocumentTitle>
                        <DocumentDescription>{doc.description}</DocumentDescription>
                      </DocumentInfo>
                    </DocumentHeader>
                    
                                         <DocumentMeta>
                       <MetaItem>
                         <FontAwesomeIcon icon={faUser} />
                         {doc.author}
                       </MetaItem>
                       <MetaItem>
                         <FontAwesomeIcon icon={faFileAlt} />
                         {doc.fileSize}
                       </MetaItem>
                     </DocumentMeta>
                    
                    <DocumentTags>
                      {doc.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </DocumentTags>
                    
                    <DocumentActions>
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
                        Предварительный просмотр
                      </ActionButton>
                    </DocumentActions>
                  </DocumentCard>
                ))}
              </DocumentationGrid>
            )}
          </CategorySection>
        ))}
      </Section>

      <InfoBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <InfoBoxTitle>Важная информация о документации</InfoBoxTitle>
        <InfoBoxText>
          Все документы предоставляются в актуальных версиях и регулярно обновляются 
          в соответствии с изменениями в нормативной базе и технических требованиях.
        </InfoBoxText>
        <InfoBoxList>
          <InfoBoxItem>Документы обновляются ежемесячно</InfoBoxItem>
          <InfoBoxItem>Все файлы проверены на вирусы</InfoBoxItem>
          <InfoBoxItem>Поддержка различных форматов (PDF, DOC, XLS)</InfoBoxItem>
          <InfoBoxItem>Бесплатное скачивание для клиентов</InfoBoxItem>
          <InfoBoxItem>Техническая поддержка по документации</InfoBoxItem>
          <InfoBoxItem>Возможность заказа печатных версий</InfoBoxItem>
        </InfoBoxList>
      </InfoBox>

      <ContactSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <ContactTitle>Нужна помощь с документацией?</ContactTitle>
        <ContactText>
          Наши специалисты помогут найти нужные документы и ответят на все вопросы 
          по технической документации и нормативным требованиям.
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
            <FontAwesomeIcon icon={faFileAlt} />
            Заказать документы
          </ContactButton>
        </ContactButtons>
      </ContactSection>
    </PageContainer>
  );
}

export default DocumentationPage; 