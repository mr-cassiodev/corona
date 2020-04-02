import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';

import { Container, Header, HeaderCredits, Content } from './styles';

const InformationLayout = ({ children }) => (
  <Container>
    <Header>
      <Link to="/">
        <IoMdArrowRoundBack size={40} />
      </Link>

      <HeaderCredits>
        <strong>
          Powred by{' '}
          <span>
            <a
              href="https://discord.gg/wbVrB2S"
              rel="noopener noreferrer"
              target="_blank"
            >
              SweetCode
            </a>
          </span>
        </strong>
      </HeaderCredits>
    </Header>

    <Content>{children}</Content>
  </Container>
);

InformationLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default InformationLayout;
