import { gql, useApolloClient, useMutation } from '@apollo/client'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

import Colors from '../style/colors'

const CookiesWrapper = styled.div`
  background-color: ${Colors['color-white']};
  bottom: 1rem;
  display: ${props => props.display};
  position: absolute;
  left: 50%;
  width: 98vw;
  padding: 2rem;
  transform: translateX(-50%);
  z-index: 4;
`

const Button = styled.button`
  color: ${Colors['color-white']};
  &.primary {
    background-color: ${Colors['color-dark-blue']};
  }

  &.reject {
    background-color: ${Colors['color-light-gray']};
    margin-left: 2rem;
  }

  &:hover {
    background-color: ${Colors['color-pickled-bluewood']};
  }
`

const Info = styled.div`
  margin-bottom: 2rem;
`

const LOCAL_AUTHOR = gql`
  mutation createLocalAuthor {
    createLocalAuthor
  }
`

const Cookies = () => {
  let storageTypeLocal = localStorage
  let storageTypeSession = sessionStorage

  const cookiePropName = 'display_cookies'

  const [displayCookies, setDisplayCookies] = useState(false)

  const [submitedValue, setSubmitedValue] = useState('')

  const [localAuthor, { loading, error }] = useMutation(LOCAL_AUTHOR, {
    onCompleted: data => localStorage.setItem('token', data.createLocalAuthor)
  })

  submitedCookies = () => {
    if (submitedValue === 'accept') {
      storageTypeLocal.setItem(cookiePropName, true)
      localAuthor()
      setDisplayCookies(true)
    }
    if (submitedValue === 'reject') {
      storageTypeSession.setItem(cookiePropName, true)
      setDisplayCookies(true)
    }
  }

  useEffect(() => {
    if (
      storageTypeLocal.getItem(cookiePropName) ||
      storageTypeSession.getItem(cookiePropName)
    ) {
      setDisplayCookies(true)
    }
  })

  return (
    <CookiesWrapper display={displayCookies ? 'none' : 'block'}>
      <Info>
        We use cookies to allow you to update your generated QR Code Urls.{' '}
      </Info>
      <form
        onSubmit={event => {
          event.preventDefault()
          submitedCookies()
        }}
      >
        <Button
          className="primary"
          type="submit"
          onClick={() => {
            setSubmitedValue('accept')
          }}
        >
          Agree
        </Button>
        <Button
          className="reject"
          type="submit"
          onClick={() => {
            setSubmitedValue('reject')
          }}
        >
          Decline
        </Button>
      </form>
    </CookiesWrapper>
  )
}

export default Cookies
