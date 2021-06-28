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
          <option value="">All</option>
          <option name="teambuilding" value="teambuilding">
            {/* Team Building */}
            Coming Soon
          </option>
          <option name="educational" value="educational">
            {/* Educational */}
            Coming Soon
          </option>
          <option name="happyhour" value="happyhour">
            {/* Happy Hour */}
            Coming Soon
          </option>
        </Select>
      </HStack>
    </Container>
  );
}

MeetupFilters.propTypes = { handler: PropTypes.func.isRequired };

export default MeetupFilters;
