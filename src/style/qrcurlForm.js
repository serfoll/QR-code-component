import styled from 'styled-components'

import Colors from './colors'

export default {
  Button: styled.button`
    background-color: ${Colors['color-dark-blue']};
    border: none;
    border-radius: 1rem;
    color: ${Colors['color-white']};
    cursor: pointer;
    display: block;
    height: 4rem;
    margin: 3rem auto 2rem;
    padding: 1rem;
    transition: border-radius 0.4s ease-in;

    &:hover,
    &:active {
      background-color: ${Colors['color-pickled-bluewood']};
      border-radius: 10rem;
    }
  `,

  Form: styled.form`
    border-bottom: 1px solid ${Colors['color-light-gray']};
  `,

  Info: styled.p`
    font-size: 1.2rem;
    font-style: italic;
    margin: 2rem auto 1rem;
    text-align: center;
  `,

  Input: styled.input`
    display: block;
    height: 4rem;
    padding: 1rem;
    width: 100%;
  `,

  Label: styled.label`
    display: block;
    margin: 1.5rem 0;
  `,

  Textarea: styled.textarea`
    display: block;
    height: 8rem;
    padding: 1rem;
    resize: none;
    width: 100%;
  `,

  Title: styled.h1`
    margin-bottom: 3rem;
  `,

  Warning: styled.span`
    color: ${Colors['color-red']};
  `,

  Wrapper: styled.div`
    background-color: ${Colors['color-white']};
    border-radius: 2rem;
    left: 50%;
    padding: 4rem 1.8rem 2rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 32rem;
  `
}
