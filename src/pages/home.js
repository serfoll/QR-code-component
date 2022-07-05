import React, { useEffect } from 'react'

import Cookies from '../components/cookies'
import NewQrCurl from '../components/newQrCurl'

const Home = () => {
  useEffect(() => {
    document.title = ' QRCURL - Generate New QR Code'
  })

  return (
    <>
      <Cookies />
      <NewQrCurl />
    </>
  )
}

export default Home
