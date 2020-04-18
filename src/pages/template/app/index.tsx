import React from 'react';

import { Container, Sidebar, Content, Topbar } from './styles';

const app: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </Sidebar>
      <Content>
        <Topbar>
          CABEÇALHO
        </Topbar>
        {children}
      </Content>
    </Container>
  );
};

export default app;
