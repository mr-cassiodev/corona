import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 96px;

  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 50px 0 30px;
    font-size: 7.2rem;
    color: #061a40;
  }
  p {
    font-size: 2.1rem;
    color: #737380;
    line-height: 30px;
  }
`;
