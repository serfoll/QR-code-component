import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = ' QRCURL - Generate QR Code';
  });
  return (
    <div>
      <h1>QRCURL - Generate QR Code </h1>
      <p>Home Page</p>
    </div>
  );
};

export default Home;
