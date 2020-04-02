import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  text-align: center;

  background-color: #fbfbf2;
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
  font-family: 'Roboto Condensed', sans-serif;


  h1 {
    font-size: 7.2rem;
    text-align: center;
    color: #061a40;
  }
  span {
    font-size: 2.1rem;
    color: #0353a4;
  }
`;
