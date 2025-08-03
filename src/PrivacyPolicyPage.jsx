import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faEye, faDatabase, faUserShield, faHandshake } from '@fortawesome/free-solid-svg-icons';

const PageContainer = styled.div`
  padding: 200px 2rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 100px 1rem 2rem;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentSection = styled(motion.section)`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const SectionContent = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(47, 84, 131, 0.1);
  border: 1px solid rgba(47, 84, 131, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #333333;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  margin: 1.5rem 0;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.7;
  color: #333333;
  margin-bottom: 0.8rem;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(47, 84, 131, 0.05) 0%, rgba(26, 47, 75, 0.05) 100%);
  border-left: 4px solid #2f5483;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1.5rem 0;
  }
`;

const HighlightTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2f5483;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #2f5483 0%, #1a2f4b 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const ContactEmail = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
  color: #666666;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
`;

function PrivacyPolicyPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Политика конфиденциальности
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Мы ценим вашу конфиденциальность и стремимся обеспечить безопасность ваших персональных данных
        </PageSubtitle>
      </PageHeader>

      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <SectionTitle>
          <FontAwesomeIcon icon={faShieldAlt} />
          Общие положения
        </SectionTitle>
        <SectionContent>
          <Paragraph>
            Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных пользователей сайта компании «Стройэнергетика» (далее — «Компания», «мы», «наш»).
          </Paragraph>
          <Paragraph>
            Используя наш сайт, вы соглашаетесь с условиями данной Политики. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте наш сайт.
          </Paragraph>
          <HighlightBox>
            <HighlightTitle>Важные моменты:</HighlightTitle>
            <List>
              <ListItem>Мы собираем только необходимые персональные данные</ListItem>
              <ListItem>Ваши данные используются исключительно для предоставления услуг</ListItem>
              <ListItem>Мы не передаем ваши данные третьим лицам без вашего согласия</ListItem>
              <ListItem>Вы можете в любое время отозвать согласие на обработку данных</ListItem>
            </List>
          </HighlightBox>
        </SectionContent>
      </ContentSection>

      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SectionTitle>
          <FontAwesomeIcon icon={faDatabase} />
          Какие данные мы собираем
        </SectionTitle>
        <SectionContent>
          <Paragraph>
            Мы собираем следующие виды персональных данных:
          </Paragraph>
          <List>
            <ListItem><strong>Контактная информация:</strong> имя, фамилия, номер телефона, адрес электронной почты</ListItem>
            <ListItem><strong>Информация о компании:</strong> название организации, должность</ListItem>
            <ListItem><strong>Техническая информация:</strong> IP-адрес, тип браузера, операционная система</ListItem>
            <ListItem><strong>Данные о заказах:</strong> история покупок, предпочтения, отзывы</ListItem>
          </List>
          <Paragraph>
            Мы не собираем и не обрабатываем специальные категории персональных данных (раса, национальность, политические взгляды, религиозные убеждения, состояние здоровья, интимная жизнь).
          </Paragraph>
        </SectionContent>
      </ContentSection>

      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <SectionTitle>
          <FontAwesomeIcon icon={faEye} />
          Цели обработки данных
        </SectionTitle>
        <SectionContent>
          <Paragraph>
            Ваши персональные данные обрабатываются в следующих целях:
          </Paragraph>
          <List>
            <ListItem>Обработка заказов и предоставление услуг</ListItem>
            <ListItem>Связь с клиентами и ответы на запросы</ListItem>
            <ListItem>Улучшение качества обслуживания и персонализация контента</ListItem>
            <ListItem>Отправка информационных материалов (только с вашего согласия)</ListItem>
            <ListItem>Выполнение обязательств по договорам</ListItem>
            <ListItem>Соблюдение требований законодательства</ListItem>
          </List>
          <Paragraph>
            Мы обрабатываем ваши данные только в тех целях, для которых они были собраны, и не используем их для других целей без вашего согласия.
          </Paragraph>
        </SectionContent>
      </ContentSection>

      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <SectionTitle>
          <FontAwesomeIcon icon={faLock} />
          Безопасность данных
        </SectionTitle>
        <SectionContent>
          <Paragraph>
            Мы принимаем все необходимые технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
          </Paragraph>
          <List>
            <ListItem>Использование защищенных серверов и шифрования данных</ListItem>
            <ListItem>Ограничение доступа к персональным данным только уполномоченным сотрудникам</ListItem>
            <ListItem>Регулярное обновление систем безопасности</ListItem>
            <ListItem>Мониторинг и аудит доступа к данным</ListItem>
            <ListItem>Обучение сотрудников вопросам защиты персональных данных</ListItem>
          </List>
          <Paragraph>
            В случае обнаружения нарушения безопасности данных мы незамедлительно уведомим вас и соответствующие органы в соответствии с требованиями законодательства.
          </Paragraph>
        </SectionContent>
      </ContentSection>

      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <SectionTitle>
          <FontAwesomeIcon icon={faHandshake} />
          Передача данных третьим лицам
        </SectionTitle>
        <SectionContent>
          <Paragraph>
            Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам, за исключением следующих случаев:
          </Paragraph>
          <List>
            <ListItem>С вашего явного согласия</ListItem>
            <ListItem>Для выполнения обязательств по договорам (например, доставка товаров)</ListItem>
            <ListItem>Для соблюдения требований законодательства</ListItem>
            <ListItem>Для защиты наших прав и безопасности</ListItem>
          </List>
          <Paragraph>
            В случае передачи данных третьим лицам мы обеспечиваем соблюдение ими требований по защите персональных данных и заключаем соответствующие соглашения о конфиденциальности.
          </Paragraph>
        </SectionContent>
      </ContentSection>

      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <SectionTitle>
          <FontAwesomeIcon icon={faUserShield} />
          Ваши права
        </SectionTitle>
        <SectionContent>
          <Paragraph>
            В соответствии с законодательством о персональных данных, вы имеете следующие права:
          </Paragraph>
          <List>
            <ListItem><strong>Право на доступ:</strong> получить информацию о том, какие данные мы обрабатываем</ListItem>
            <ListItem><strong>Право на исправление:</strong> исправить неточные или неполные данные</ListItem>
            <ListItem><strong>Право на удаление:</strong> потребовать удаления ваших данных</ListItem>
            <ListItem><strong>Право на ограничение:</strong> ограничить обработку данных</ListItem>
            <ListItem><strong>Право на переносимость:</strong> получить данные в структурированном формате</ListItem>
            <ListItem><strong>Право на возражение:</strong> возразить против обработки данных</ListItem>
            <ListItem><strong>Право на отзыв согласия:</strong> отозвать согласие на обработку данных</ListItem>
          </List>
          <Paragraph>
            Для реализации ваших прав обращайтесь к нам по указанным контактным данным.
          </Paragraph>
        </SectionContent>
      </ContentSection>

      <ContactInfo
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <ContactTitle>Вопросы по конфиденциальности?</ContactTitle>
        <ContactText>
          Если у вас есть вопросы относительно нашей Политики конфиденциальности или обработки персональных данных, свяжитесь с нами:
        </ContactText>
        <ContactEmail href="mailto:privacy@stroienergetika.ru">
          privacy@stroienergetika.ru
        </ContactEmail>
      </ContactInfo>

      <LastUpdated
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        Последнее обновление: 1 января 2024 года
      </LastUpdated>
    </PageContainer>
  );
}

export default PrivacyPolicyPage; 