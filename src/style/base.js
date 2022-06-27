import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

//customs
import Colors from './colors';
import Fonts from './fonts';
import Reset from './reset';

export default createGlobalStyle`
  ${normalize}
  ${Fonts}
  ${Reset}

  html{
    font-size: calc(100vw/750px * 10);

     @media screen(min-width: 1440px) {
      font-size: calc(100vw / 1440 * 10);
    }
  }

  body{
    background-color: ${Colors['colro-light-gray']};
    font-family: 'Outfit', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
