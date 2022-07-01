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
  SvgWrapper: styled.div`
    background-color: ${props => props.color};
    color: blue;
    border-radius: 1rem;
    height: 29rem;
    margin: auto;
    position: relative;
    width: 100%;

    &::after,
    &::before {
      background-color: ${props => props.color};
      border-radius: 50%;
      content: '';
      display: block;
      filter: contrast(0.1) brightness(200%) opacity(0.1);
      height: 24rem;
      position: absolute;
      transform: translate(-50%, -50%);
      width: 24rem;
    }

    &::after {
      left: 28rem;
      top: 31rem;
      z-index: 1;
    }

    &::before {
      height: 28rem;
      left: 3rem;
      top: 3rem;
      width: 28rem;
      z-index: 3;
    }

    svg {
      height: auto;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 16rem;
      z-index: 2;
      rect {
        fill: transparent !important;
      }
      path {
        fill: ${colors['color-white']} !important;
      }
    }
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
