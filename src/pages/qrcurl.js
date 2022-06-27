import { useEffect } from 'react';

const QrCurl = () => {
  useEffect(() => {
    document.title = ' QRCURL - Details';
  });
  return (
    <div>
      <h1>QRCURL - Details </h1>
      <p>Single QRCode View </p>
    </div>
  );
};

export default QrCurl;
