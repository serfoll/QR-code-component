import React from 'react'
import qrcode from '../style/qrcode.js'

const QrCurl = ({ qrcurl }) => {
  return (
    <qrcode.Wrapper>
      <qrcode.SvgWrapper
        color={qrcurl.hexCode}
        dangerouslySetInnerHTML={{ __html: qrcurl.svgCode }}
      />
      <qrcode.Title>{qrcurl.title}</qrcode.Title>
      <qrcode.Description>{qrcurl.description}</qrcode.Description>
    </qrcode.Wrapper>
  )
}

export default QrCurl
