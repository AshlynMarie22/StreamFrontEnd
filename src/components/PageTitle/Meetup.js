import React from 'react';
import { Center, Box, Image } from '@chakra-ui/react';

const Meetup = () => {
  return (
    <>
      <Center>
        <Box>
          <Image
            src="https://ashlynimages.s3.us-east-2.amazonaws.com/Meetups.png"
            alt="Meetup"
            mt={10}
            mb={10}
            w={550}
          />
        </Box>
      </Center>
    </>
  );
};
export default Meetup;
