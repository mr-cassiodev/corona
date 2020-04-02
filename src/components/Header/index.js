import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

import {
  Container,
  SearchContainer,
  SearchIcon,
  Input,
  Navigation,
} from './styles';

const HeaderComponent = () => {
  const [inSearch, setInSearch] = useState(false);

  function searchNavigation() {
    console.log('opan');

    if (inSearch) {
      setInSearch(false);
    } else {
      setInSearch(true);
    }
  }

  return (
    <Container>
      <SearchContainer>
        <SearchIcon>
          <FiSearch size={30} />
        </SearchIcon>

        <Input
          inSearch={inSearch}
          onFocus={searchNavigation}
          onBlur={searchNavigation}
          placeholder="Posso te ajudar ?"
        />
      </SearchContainer>

      <Navigation active={!inSearch}>
        <ul>
          <li>
            <Link to="/">Mundo</Link>
          </li>
          <li>
            <Link to="/">Notícias</Link>
          </li>
          <li>
            <Link to="/">Local</Link>
          </li>
          <li>
            <Link to="/">Download</Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default HeaderComponent;
