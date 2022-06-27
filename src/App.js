//libraries
import { createRoot } from 'react-dom/client';
import React from 'react';
import styled from 'styled-components';

//Style components
import BaseStyle from './style/base';

//DOM el
const container = document.getElementById('root');
const root = createRoot(container);

const Title = styled.h1``;

const App = () => {
  return (
    <React.Fragment>
      <BaseStyle />
      <Title>Hello QRCUL!</Title>
      <p>Welcome to QR Code Component generator</p>
    </React.Fragment>
  );
};

root.render(<App />);
