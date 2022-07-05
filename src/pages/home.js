import React, { useEffect } from 'react'

import NewQrCurl from '../components/newQrCurl'

const Home = () => {
  useEffect(() => {
    document.title = ' QRCURL - Generate New QR Code'
  })

  return (
    <>
      <NewQrCurl />
    </>
  )
}

export default Home
