import styled from 'styled-components';

export const Container = styled.header.attrs({
  className: 'main-header',
})`
  position: absolute;
  display: flex;
  z-index: 999;
  height: 100px;
  width: 100%;
  padding: 0 80px;

  justify-content: space-between;
  align-items: center;

  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15); */
  background-color: rgba(0, 0, 0, 0.1);

  a {
    font-size: 1.8rem;
    font-weight: 600;
  }

  nav {
    &,
    ul,
    li,
    a {
      display: flex;
      height: 100%;
    }
  }
`;

export const Button = styled.span`
  display: flex;
  width: 60px;
  height: 60px;

  border-radius: 50%;

  align-items: center;
  justify-content: center;
  transition: background-color 300ms ease-in-out;

  :hover {
    background-color: #cbcdd1;
  }
`;

export const Navigation = styled.li`
  margin: 0 15px;

  a {
    position: relative;
    padding: 0 10px;

    align-items: center;
    justify-content: center;

    &:before {
      content: '';
      position: absolute;
      width: 0%;
      height: 3px;
      bottom: 0;
      background-color: #cbcdd1;
      transition: width 400ms;
    }

    &:hover:before {
      width: 100%;
    }
  }
`;
