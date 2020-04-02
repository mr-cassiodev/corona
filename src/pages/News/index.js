import React from 'react';

import Layout from '~/layouts/Information';

import { Container, Content } from './styles';

const NewsPage = () => (
  <Layout>
    <Container>
      <Content>
        <h1>NOTÍCIAS</h1>
        <span>Atualizações em tempo real</span>
      </Content>
    </Container>
  </Layout>
);

export default NewsPage;
