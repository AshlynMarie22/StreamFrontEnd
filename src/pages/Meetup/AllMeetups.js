import { ChakraProvider, theme } from '@chakra-ui/react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Meetups, MeetupFilters } from 'components/Forms/CreateMeetupForm';
import Header from 'components/Header/Header';
import Meetup from 'components/PageTitle/Meetup';

const qc = new QueryClient();

function AllMeetups() {
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
        <Header />
        <Meetup />
        <MeetupFilters handler={handleChange} />
        {currentFilter.type ? <Meetups currentFilter={currentFilter} /> : null}
        {/* <AddMeetup /> */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default AllMeetups;
