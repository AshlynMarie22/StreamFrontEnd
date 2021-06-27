import { ChakraProvider, theme } from '@chakra-ui/react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AddMeetup, Meetups, MeetupFilters } from './components/CreateMeetup';

const qc = new QueryClient();

function MeetupIndex() {
  // TODO: Use `useReducer`
  const [currentFilter, setCurrentFilter] = useState({});

  function handleChange(e) {
    setCurrentFilter(() => ({
      type: e.target.name,
      value: e.target.value.toLowerCase(),
    }));
  }

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={qc}>
        <MeetupFilters handler={handleChange} />
        {currentFilter.type ? <Meetups currentFilter={currentFilter} /> : null}
        <AddMeetup />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MeetupIndex;
