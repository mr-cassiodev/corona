import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  max-width: 512px;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
  justify-content: center;

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
