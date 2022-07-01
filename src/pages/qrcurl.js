import React, { useEffect } from 'react'
import qrcode from '../style/qrcode'
const testImage = new URL('../shared/images/image-qr-code.png', import.meta.url)

const QrCurl = () => {
  useEffect(() => {
    document.title = ' QRCURL - Details'
  })
  return (
    <qrcode.Wrapper>
      <qrcode.Image src={testImage} alt="qrcode with embed url" />
      <qrcode.Title>
        Improve your front-end skills by building projects
      </qrcode.Title>
      <qrcode.Description>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </qrcode.Description>
    </qrcode.Wrapper>
  )
}

export default QrCurl
