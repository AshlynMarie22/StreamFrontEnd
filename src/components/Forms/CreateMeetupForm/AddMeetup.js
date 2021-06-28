import {
  Button,
  FormControl,
  Center,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  SimpleGrid,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react';
import { add } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import CreateAMeetup from 'components/PageTitle/CreateaMeetup';

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
      <Center>
        <SimpleGrid>
          <Center>
            <Box>
              <Breadcrumb separator="-">
                <BreadcrumbItem>
                  <BreadcrumbLink mx={10} color="#707070" href="/">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink mx={10} color="#707070" href="/allmeetups">
                    Meetups
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink mx={10} color="#707070" href="/createmeetup">
                    Create a Meetup
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
          </Center>
          <Center>
            <CreateAMeetup />
            <Box mt={20} mb={5}>
              <Heading
                color="#707070"
                font-family="AnastasiaScriptPersonalUseRegular-KDVA"
              >
                Create a Meetup
              </Heading>
            </Box>
          </Center>
          <Box
            bgColor="#F8FCFD"
            w={1000}
            border="1px"
            borderColor="#707070"
            mt={10}
            mb={20}
          >
            <Box m={8}>
              <form
                className="flex flex-col gap-2 my-2"
                onSubmit={handleSubmit}
              >
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

                  <Input
                    placeholder="Description"
                    size="xs"
                    name="description"
                  />
                </FormControl>
                <Center>
                  <Box>
                    <Button
                      type="submit"
                      variant="outline"
                      spacing="6"
                      borderColor="#707070"
                      mt={5}
                    >
                      Done
                    </Button>
                  </Box>
                </Center>

                {/* </VStack> */}
              </form>
            </Box>
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
}

export default AddMeetup;
