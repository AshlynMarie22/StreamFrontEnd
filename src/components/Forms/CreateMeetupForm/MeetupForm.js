// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   RadioGroup,
//   HStack,
//   Radio,
//   Box,
// } from '@chakra-ui/react';
// import PropTypes from 'prop-types';
// import { forwardRef } from 'react';

// const MeetupForm = forwardRef(function AddMeetupForm({ handler }, ref) {
//   return (
//     <>
//       <Box bgColor="#F8FCFD" w={1000} border="1px" borderColor="#707070" m={8}>
//         <Box m={8}>
//           <form
//             className="flex flex-col gap-2 my-2"
//             onSubmit={handler}
//             ref={ref}
//           >
//             <FormControl id="meetup-title" isRequired>
//               <FormLabel>Title</FormLabel>

//               <Input placeholder="Meetup Name" size="xs" name="title" />
//             </FormControl>

//             <FormControl id="meetup-date">
//               <FormLabel>Date</FormLabel>

//               <Input placeholder="Meetup Date" size="xs" name="date" />
//             </FormControl>

//             <FormControl id="meetup-time">
//               <FormLabel>Time</FormLabel>
//               <Input placeholder="Meetup Time" size="xs" name="time" />
//             </FormControl>

//             <FormControl id="meetup-link">
//               <FormLabel>Link</FormLabel>

//               <Input placeholder="Meetup Link" size="xs" name="link" />
//             </FormControl>

//             <FormControl id="category" isRequired>
//               <FormLabel>Category</FormLabel>
//               <RadioGroup>
//                 <HStack spacing="24px">
//                   <Radio value="Team Building" name="category">
//                     Team Building
//                   </Radio>
//                   <Radio value="Educational" name="category">
//                     Educational
//                   </Radio>
//                   <Radio value="Happy Hour" name="category">
//                     Happy Hour
//                   </Radio>
//                 </HStack>
//               </RadioGroup>
//             </FormControl>

//             <FormControl id="meetup-description">
//               <FormLabel>Description</FormLabel>

//               <Input placeholder="Description" size="xs" name="description" />
//             </FormControl>

//             <Button type="submit" variant="outline" spacing="6" borderColor="#707070">
//               Done
//             </Button>
//           </form>
//         </Box>
//       </Box>
//     </>
//   );
// });

// MeetupForm.propTypes = { handler: PropTypes.func.isRequired };

// export default MeetupForm;
