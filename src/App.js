import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from 'pages/Home/Home';
import CreateMeetup from 'pages/Meetup/CreateMeetup';
import AllMeetups from 'pages/Meetup/AllMeetups';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/createmeetup" component={CreateMeetup} />
            <Route exact path="/allmeetups" component={AllMeetups} />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
