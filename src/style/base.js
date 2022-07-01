import { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'

//customs
import Colors from './colors'
import Fonts from './fonts'
import Reset from './reset'

export default createGlobalStyle`
  ${normalize}
  ${Fonts}
  ${Reset}

  *,
  *:before,
  *:after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
  }

  html{
    font-size: calc(750px/750 * 10);

    @media screen(min-width: 1440px) {
      font-size: calc(1440px/1440 * 10);
    }
  }

  body{
    background-color: ${Colors['color-grayish-blue']};
    font-family: 'Outfit', sans-serif;
    font-size: 1.5rem;
  }

  a:link,
  a:visited {
    color: #0077cc;
  }

  a:hover,
  a:focus {
    color: #004499;
  }


  h1{
    color: ${Colors['color-dark-blue']};
    font-size: 2.3rem;
    font-weight: 700;
    text-align: center;
  }
`
