import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import HomePage from 'pages/Home/Home';
import CreateMeetup from 'pages/Meetup/CreateMeetup';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
        <CreateMeetup />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
