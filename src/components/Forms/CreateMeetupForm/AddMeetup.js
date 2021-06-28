import {
  Button,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Box,
} from '@chakra-ui/react';
import { add } from 'api';
import { useMutation, useQueryClient } from 'react-query';

function AddMeetup() {
  const qc = useQueryClient();

  const mutation = useMutation(newMeetup => add(newMeetup), {
    onSuccess: () => {
      qc.invalidateQueries('meetup');
    },
  });

  function handleSubmit(event) {
    event.preventDefault();

    mutation.mutate(Object.fromEntries(new FormData(event.target)));
    event.target.reset();
  }

  return (
    <>
      <Box bgColor="#F8FCFD" w={1000} border="1px" borderColor="#707070" m={8}>
        <Box m={8}>
          <form className="flex flex-col gap-2 my-2" onSubmit={handleSubmit}>
            {/* <VStack spacing="24px">
            <HStack spacing="24px"> */}

            <FormControl id="title" isRequired>
              <FormLabel>Meetup Title</FormLabel>

              <Input placeholder="Title" name="title" />
            </FormControl>

            <FormControl id="date" isRequired>
              <FormLabel>Meetup Date</FormLabel>

              <Input placeholder="Meetup Date" name="date" />
            </FormControl>

            <FormControl id="time" isRequired>
              <FormLabel>Meetup Time</FormLabel>

              <Input placeholder="Meetup Time" name="time" />
            </FormControl>

            {/* </HStack> */}

            <FormControl id="link" isRequired>
              <FormLabel>Meetup Link</FormLabel>

              <Input placeholder="Meetup Link" name="link" />
            </FormControl>

            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <RadioGroup>
                <HStack spacing="24px">
                  <Radio value="Team Building" name="category">
                    Team Building
                  </Radio>
                  <Radio value="Educational" name="category">
                    Educational
                  </Radio>
                  <Radio value="Happy Hour" name="category">
                    Happy Hour
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl id="description">
              <FormLabel>Description</FormLabel>

              <Input placeholder="Description" size="xs" name="description" />
            </FormControl>

            <Button
              type="submit"
              variant="outline"
              spacing="6"
              borderColor="#707070"
            >
              Done
            </Button>

            {/* </VStack> */}
          </form>
        </Box>
      </Box>
    </>
  );
}

export default AddMeetup;
