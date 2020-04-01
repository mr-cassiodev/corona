import { createGlobalStyle } from 'styled-components';

import '~/assets/css/normalize.css';

export default createGlobalStyle`
  * {
    color: #fff; /* 373e40 */
  }

  html {
    font-size: 62.5%;
  }

  body {
    font: 1.6rem 'Montserrat', sans-serif;
    background-color: #4f5359;
  }
`;
