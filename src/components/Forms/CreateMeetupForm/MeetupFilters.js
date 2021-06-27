import { Container, HStack, Select } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function MeetupFilters({ handler }) {
  return (
    <Container my={4}>
      <HStack spacing="24px">
        <Select
          placeholder="Get Meetups by category"
          w={256}
          name="category"
          onChange={handler}
        >
          <option value="Team Building">Team Building</option>
          <option value="Educational">Educational</option>
          <option value="Happy Hour">Happy Hour</option>
        </Select>
      </HStack>
    </Container>
  );
}

MeetupFilters.propTypes = { handler: PropTypes.func.isRequired };

export default MeetupFilters;
