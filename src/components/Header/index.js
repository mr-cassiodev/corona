import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

import { Container, Button, Navigation } from './styles';

const HeaderComponent = () => {
  const navbarRef = useRef(null);

  function searchNavigation() {
    console.log('opan');
  }

  return (
    <Container ref={navbarRef}>
      <Button onClick={searchNavigation}>
        <FiSearch size={30} />
      </Button>
      <nav>
        <ul>
          <Navigation>
            <Link to="/world">Mundo</Link>
          </Navigation>
          <Navigation>
            <Link to="/news">Notícias</Link>
          </Navigation>
          <Navigation>
            <Link to="/local">Local</Link>
          </Navigation>
          <Navigation>
            <Link to="/404">Download</Link>
          </Navigation>
        </ul>
      </nav>
    </Container>
  );
};

export default HeaderComponent;
