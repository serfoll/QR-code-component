import { gql, useQuery } from '@apollo/client'
import React, { useEffect } from 'react'

import QrCurl from '../components/qrcurl'

const GET_QRCODES = gql`
  query QrCodeFeed($cursor: String) {
    qrcodeFeed(cursor: $cursor) {
      cursor
      hasNextPage
      qrcodes {
        author
        description
        id
        shortCode
        svgCode
        title
        url
      }
    }
  }
`

const Feed = () => {
  useEffect(() => {
    document.title = 'QRCURL - Feed'
  })

  const { data, loading, error, fetchMore } = useQuery(GET_QRCODES)

  //when loading
  if (loading) return <p>Loading...</p>

  //on error
  if (error) return <p>Error!</p>

  //on success
  return (
    <div>
      {console.log()}
      {data.qrcodeFeed.qrcodes.map(qrcode => (
        <div key={qrcode.shortCode}>
          <QrCurl qrcurl={qrcode} />
        </div>
      ))}
    </div>
  )
}

export default Feed
