import PropTypes from 'prop-types';
import React from 'react';

import Header from '~/components/Header';

import { Container, Content } from './styles';

const DefaulLayout = ({ children }) => (
  <Container>
    <Header />
    <Content>{children}</Content>
  </Container>
);

DefaulLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaulLayout;
