import styled from 'styled-components'
import colors from './colors'

export default {
  Wrapper: styled.div`
    background: ${colors['color-white']};
    border-radius: 2rem;
    height: auto;
    left: 50%;
    overflow: hidden;
    padding: 1.6rem;
    padding-bottom: 4.3rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 32rem;
  `,
  Image: styled.img`
    border-radius: 1rem;
    height: auto;
    margin: auto;
    width: 100%;
  `,

  Title: styled.h1`
    color: ${colors['color-dark-blue']};
    font-size: 2.3rem;
    line-height: 2.8rem;
    margin: 2rem auto;
    text-align: center;
    width: 100%;
  `,
  Description: styled.p`
    color: ${colors['color-light-gray']};
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin: auto;
    text-align: center;
    width: 85%;
  `
}
