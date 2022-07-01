import React, { useEffect } from 'react'
import styled from 'styled-components'
import Colors from '../style/colors'

const Button = styled.button`
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
`

const Form = styled.form`
  border-bottom: 1px solid ${Colors['color-light-gray']};
`

const Info = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin: 2rem auto 1rem;
  text-align: center;
`

const Input = styled.input`
  display: block;
  height: 4rem;
  padding: 1rem;
  width: 100%;
`

const Label = styled.label`
  display: block;
  margin: 1.5rem 0;
`

const Textarea = styled.textarea`
  display: block;
  height: 8rem;
  padding: 1rem;
  resize: none;
  width: 100%;
`

const Title = styled.h1`
  margin-bottom: 3rem;
`

const Warning = styled.span`
  color: ${Colors['color-red']};
`

const Wrapper = styled.div`
  background-color: ${Colors['color-white']};
  border-radius: 2rem;
  left: 50%;
  padding: 4rem 1.8rem 2rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 32rem;
`

const Home = () => {
  useEffect(() => {
    document.title = ' QRCURL - Generate QR Code'
  })
  return (
    <Wrapper>
      <Title>Generate QR Code</Title>
      <Form>
        <Label for="url">
          Url <Warning>*</Warning>
        </Label>
        <Input
          id="url"
          name="url"
          placeholder="http://www.google.com"
          type="url"
        />
        <Label for="title">Title</Label>
        <Input
          id="title"
          name="title"
          maxlength="50"
          placeholder="Search the world's information"
          type="text"
        />
        <Label for="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          maxlength="95"
          placeholder="Google has many special features to help you find exactly what you're looking for."
          type="text"
          wrap="soft"
        />
        <Button type="submit">Generate QRCurl</Button>
      </Form>
      <Info>
        All fileds marked with <Warning>*</Warning> are required!
      </Info>
    </Wrapper>
  )
}

export default Home

/* Max input title 50 */
/** Max input description 95 */
