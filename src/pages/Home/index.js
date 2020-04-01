import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '~/layouts/Default';

import { Container, Content, ButtonsContainer } from './styles';

const HomePage = () => (
  <Layout>
    <Container>
      <Content>
        <h1>Sobre o CoronaVírus</h1>
        <ButtonsContainer>
          <Link to="/more">Saiba mais</Link>
          <Link to="/registrations">Pesquise seu estado</Link>
        </ButtonsContainer>
      </Content>
    </Container>
  </Layout>
);

export default HomePage;
