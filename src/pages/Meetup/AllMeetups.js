import React, { Component } from 'react';
import { Text } from '@chakra-ui/react';
import api from 'api';
import MeetupForm from 'components/Forms/CreateMeetupForm/MeetupForm';
// import MeetupTable from 'components/Forms/CreateMeetupForm/EditableText'

import { useMutation, useQuery, useQueryClient } from 'react-query';

const fetchMeetups = async () => await api.index();

function CreateMeetup() {
  const { status, data, error } = useQuery('meetups', fetchMeetups);

  const addMeetup = useMutation(payload => api.create(payload));

  const queryClient = useQueryClient();

  const handleSubmit = event => {
    event.preventDefault();
    addMeetup.mutate(Object.fromEntries(new FormData(event.target)), {
      onSuccess: () => {
        queryClient.invalidateQueries('meetups');
      },
    });
  };

  switch (status) {
    case 'loading':
      return <Text>Loading...</Text>;
    case 'error':
      return <Text color="tomato">{error.message}</Text>;
    default:
      return (
        <main className="container mx-auto">
          {/* <MeetupTable records={data} /> */}
          <MeetupForm handler={handleSubmit} />
        </main>
      );
  }
}
export default CreateMeetup;
