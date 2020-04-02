import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '~/layouts/Default';

import { Container, Content, ButtonsContainer } from './styles';

const HomePage = () => (
  <Layout>
    <Container>
      <Content>
        <h1>CORONAVÍRUS</h1>
        <p>COVID-19</p>
        <ButtonsContainer>
          <Link to="/registrations">Selecionar Estado</Link>
        </ButtonsContainer>
      </Content>
    </Container>
  </Layout>
);

export default HomePage;
