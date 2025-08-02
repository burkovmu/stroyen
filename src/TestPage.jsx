import React from 'react';
import styled from 'styled-components';

const TestContainer = styled.div`
  padding: 200px 2rem 2rem;
  text-align: center;
`;

const TestTitle = styled.h1`
  color: #2f5483;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TestText = styled.p`
  color: #666666;
  font-size: 1.1rem;
`;

function TestPage() {
  return (
    <TestContainer>
      <TestTitle>Тестовая страница</TestTitle>
      <TestText>Если вы видите эту страницу, значит сайт работает корректно!</TestText>
    </TestContainer>
  );
}

export default TestPage; 