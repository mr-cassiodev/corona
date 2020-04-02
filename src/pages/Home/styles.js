import styled from 'styled-components';

import BackgroundImage from '../../assets/img/bg.jpg';

export const Container = styled.section`
  height: 100vh;
  width: 100%;

  text-align: center;

  background: linear-gradient(rgba(255, 255, 255, 0.1), rgb(0, 0, 0)),
    url(${BackgroundImage}) no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5.6rem;
    text-align: center;
  }
  span {
    color: #ed3124;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 70px;

  a {
    padding: 15px 30px;

    font-size: 2.2rem;
    font-weight: 600;

    color: #fff;
    background-color: #006daa;
    box-shadow: 0px 14px 17px 3px rgba(0, 0, 0, 0.4);
    transition: filter 400ms;

    & + a {
      margin-left: 30px;
    }

    :hover {
      filter: brightness(80%);
    }
  }
`;
