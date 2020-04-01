import styled from 'styled-components';

import BackgroundImage from '../../assets/img/background.jpg';

export const Container = styled.section`
  height: 100vh;
  width: 100%;

  text-align: center;

  background: linear-gradient(transparent, rgb(0, 0, 0)),
    url(${BackgroundImage}) no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5.6rem;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 80px;

  a {
    padding: 15px 30px;
    border-radius: 30px;

    font-size: 2.2rem;
    font-weight: 600;

    color: #061a40;
    background-color: #b9d6f2;
    box-shadow: 0px 14px 17px 3px rgba(0, 0, 0, 0.4);
    transition: background-color 400ms, box-shadow 500ms;

    & + a {
      margin-left: 30px;
    }

    :hover {
      background-color: #a0bdd9;
      box-shadow: 0px 0px 47px -5px rgba(0, 0, 0, 0.38);
    }
  }
`;
