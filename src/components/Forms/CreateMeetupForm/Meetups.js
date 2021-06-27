import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Spinner,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { deleteMeetup, index, update as updateMeetup } from 'api';
import PropTypes from 'prop-types';
import { useMutation, useQuery, useQueryClient } from 'react-query';

function Meetups({ currentFilter }) {
  const { status, data, error } = useQuery(
    // Query will update whenever value changes
    ['meetup', currentFilter.value],
    () => index(currentFilter)
  );

  const qc = useQueryClient();

  const deleteMutation = useMutation(id => deleteMeetup(id), {
    onSuccess: () => {
      qc.invalidateQueries('meetup', currentFilter.value);
    },
  });

  const updateMutation = useMutation(
    updatedMeetup => updateMeetup(updatedMeetup),
    {
      onSuccess: () => {
        qc.invalidateQueries('meetup', currentFilter.value);
      },
    }
  );

  function handleClick(event) {
    deleteMutation.mutate(event.target.closest('td').dataset.id);
  }

  function handleSubmit(dataToUpdate) {
    const meetupToUpdate = data.find(
      ({ meetupId }) => meetupId === Number(dataToUpdate.meetupId)
    );

    const updatedMeetup = { ...meetupToUpdate, ...dataToUpdate };

    // Only `mutate` if there are actual updates
    if (JSON.stringify(meetupToUpdate) !== JSON.stringify(updatedMeetup)) {
      updateMutation.mutate(updatedMeetup);
    }
  }

  switch (status) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <Text fontSize="md">{error.message}</Text>;
    default:
      return (
        <Table variant="simple" maxWidth={960} mx="auto">
          <TableCaption placement="bottom">
            Edit Any Field to Update It!
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Link</Th>
              <Th>Category</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(
              ({
                meetupId,
                title,
                date,
                time,
                link,
                category,
                description,
              }) => (
                <Tr key={meetupId}>
                  <Td>
                    <Editable
                      defaultValue={title}
                      onSubmit={nextValue => {
                        handleSubmit({ meetupId, title: nextValue });
                      }}
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>
                  <Td>
                    <Editable
                      defaultValue={date}
                      onSubmit={nextValue => {
                        handleSubmit({ meetupId, date: nextValue });
                      }}
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>
                  <Td>
                    <Editable
                      defaultValue={time}
                      onSubmit={nextValue => {
                        handleSubmit({ meetupId, time: nextValue });
                      }}
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>
                  <Td>
                    <Editable
                      defaultValue={link}
                      onSubmit={nextValue => {
                        handleSubmit({ meetupId, link: nextValue });
                      }}
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>
                  <Td>
                    <Editable
                      defaultValue={category}
                      onSubmit={nextValue => {
                        handleSubmit({ meetupId, category: nextValue });
                      }}
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>
                  <Td>
                    <Editable
                      defaultValue={description}
                      onSubmit={nextValue => {
                        handleSubmit({ meetupId, description: nextValue });
                      }}
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>

                  <Td data-id={meetupId}>
                    <Button colorScheme="red" size="sm" onClick={handleClick}>
                      Delete 🔥 Meetup
                    </Button>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      );
  }
}

Meetups.propTypes = {
  currentFilter: PropTypes.exact({
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default Meetups;
