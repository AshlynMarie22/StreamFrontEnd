import { ChakraProvider, theme } from '@chakra-ui/react';
// import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  AddMeetup,
  // Meetups,
  // MeetupFilters,
} from 'components/Forms/CreateMeetupForm';

const qc = new QueryClient();

function CreateMeetup() {
  // TODO: Use `useReducer`
  // const [ setCurrentFilter] = useState({});

  // function handleChange(e) {
  //   setCurrentFilter(() => ({
  //     type: e.target.name,
  //     value: e.target.value.toLowerCase(),
  //   }));
  // }

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={qc}>
        {/* <MeetupFilters handler={handleChange} />
        {currentFilter.type ? <Meetups currentFilter={currentFilter} /> : null} */}
        <AddMeetup />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default CreateMeetup;

// import React, { Component } from 'react';
// import { Text } from '@chakra-ui/react';
// import api from 'api';
// import MeetupForm from 'components/Forms/CreateMeetupForm/MeetupForm';
// import MeetupTable from 'components/Forms/CreateMeetupForm/Meetups'

// import { useMutation, useQuery, useQueryClient } from 'react-query';

// const fetchMeetups = async () => await api.index();

// function CreateMeetup() {
//   const { status, data, error } = useQuery('meetup', fetchMeetups);

//   const addMeetup = useMutation(payload => api.create(payload));

//   const queryClient = useQueryClient();

//   const handleSubmit = event => {
//     event.preventDefault();
//     addMeetup.mutate(Object.fromEntries(new FormData(event.target)), {
//       onSuccess: () => {
//         queryClient.invalidateQueries('meetup');
//       },
//     });
//   };

//   switch (status) {
//     case 'loading':
//       return <Text>Loading...</Text>;
//     case 'error':
//       return <Text color="tomato">{error.message}</Text>;
//     default:
//       return (
//         <main className="container mx-auto">
//           <MeetupTable meetup={data} />
//           <MeetupForm handler={handleSubmit} />
//         </main>
//       );
//   }
// }
// export default CreateMeetup;
