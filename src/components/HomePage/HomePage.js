import React from 'react';
import { Center, Box, Container } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <>
      <Center>
        <Box
          bgColor="#F8FCFD"
          w={1000}
          h={60}
          border="1px"
          borderColor="#707070"
        >
          <Center>
            <Container m={10}>
              There are many benefits to a joint design and development system.
              Not only does it bring benefits to the design team, but it also
              brings benefits to engineering teams. It makes sure that our
              experiences have a consistent look and feel, not just in our
              design specs, but in production
            </Container>
          </Center>
        </Box>
      </Center>
    </>
  );
};
export default HomePage;
