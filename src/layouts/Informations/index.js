import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';

import { Container, Header, HeaderCredits, Content } from './styles';

const DefaulLayout = ({ children }) => (
  <Container>
    <Header>
      <Link to="/">
        <IoMdArrowRoundBack size={40} />
      </Link>

      <HeaderCredits>
        <strong>
          Powred by <span>SweetCode</span>
        </strong>
      </HeaderCredits>
    </Header>

    <Content>{children}</Content>
  </Container>
);

DefaulLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaulLayout;
