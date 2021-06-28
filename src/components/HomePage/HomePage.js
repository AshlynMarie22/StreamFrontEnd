import React from 'react';
import { Center, Box, Container, Button, SimpleGrid } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <>
      <Center>
        <Box
          bgColor="#F8FCFD"
          w={1000}
          border="1px"
          borderColor="#707070"
          m={33}
        >
          <Center>
            <SimpleGrid columns={1}>
              <Container mt={10} mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Container>
              <Center>
                <Box>
                  <Button
                    variant="outline"
                    spacing="6"
                    borderColor="#707070"
                    m={2}
                  >
                    Signup
                  </Button>
                </Box>
              </Center>
              <Center>
                <Box>
                  <Button
                    variant="outline"
                    spacing="6"
                    borderColor="#707070"
                    mt={2}
                    mb={5}
                  >
                    Login
                  </Button>
                </Box>
              </Center>
            </SimpleGrid>
          </Center>
        </Box>
      </Center>
    </>
  );
};
export default HomePage;
