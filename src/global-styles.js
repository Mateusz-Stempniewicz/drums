import { injectGlobal } from 'emotion';

import backgoundImage from './assets/images/drummer.jpg';

export default injectGlobal`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgoundImage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
  }
`;
