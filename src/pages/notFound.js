import styled from 'styled-components'
import { useEffect } from 'react'

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 100;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

export default NotFound = () => {
  useEffect(() => {
    document.title = ' QRCURL - 404'
  })

  return (
    <Title>
      404 <br /> page doesn't exist!
    </Title>
  )
}
