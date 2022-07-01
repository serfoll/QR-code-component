import { gql, useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import QrCurl from '../components/qrcurl'

const GET_QRCURL = gql`
  query qrcode($shortCode: String!) {
    qrcode(shortCode: $shortCode) {
      author
      description
      hexCode
      shortCode
      svgCode
      title
      url
    }
  }
`

const SingleQrCurl = () => {
  const { shortCode } = useParams()

  const { data, error, loading } = useQuery(GET_QRCURL, {
    variables: { shortCode }
  })

  useEffect(() => {
    if (data === undefined) {
      document.timeline = 'QRCURL - QR Code Generator'
    } else {
      document.title = `QRCURL - ${data.qrcode.title}`
    }
  })

  if (loading) {
    return <p>Loading...</p>
  }

  //on error
  if (error) return <p>Error!</p>

  return <QrCurl qrcurl={data.qrcode} />
}

export default SingleQrCurl
