import React from 'react';
import {
  Breadcrumb,
  Center,
  Box,
  BreadcrumbLink,
  BreadcrumbItem,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <>
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

            <BreadcrumbItem>
              <BreadcrumbLink mx={10} color="#707070" href="/createmeetup">
                Create a Meetup
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Center>
    </>
  );
};
export default Header;
