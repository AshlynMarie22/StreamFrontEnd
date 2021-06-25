import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import HomePage from 'pages/Home/Home';
import './index.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
