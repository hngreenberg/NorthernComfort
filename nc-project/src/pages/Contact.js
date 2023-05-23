import React from 'react';
import {   
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Flex,
    Box,
} from "@chakra-ui/react";

function ContactForm() {
  return (
    // <form>
    // <FormControl id="firstName" isRequired borderColor="red.500" borderWidth={2}>
    //     <FormLabel>First Name</FormLabel>
    //     <Input type="text" />
    //   </FormControl>

    //   <FormControl id="lastName" isRequired borderColor="red.500" borderWidth={2}>
    //     <FormLabel>Last Name</FormLabel>
    //     <Input type="text" />
    //   </FormControl>

    //   <FormControl id="phoneNumber" isRequired borderColor="red.500" borderWidth={2}>
    //     <FormLabel>Phone Number</FormLabel>
    //     <Input type="tel" />
    //   </FormControl>

    //   <FormControl id="email" isRequired borderColor="red.500" borderWidth={2}> 
    //     <FormLabel>Email</FormLabel>
    //     <Input type="email" />
    //   </FormControl>

    //   <FormControl id="message" isRequired borderColor="red.500" borderWidth={2}>
    //     <FormLabel>Message</FormLabel>
    //     <Textarea />
    //   </FormControl>

    //   <Button variant="red" type="submit">Submit</Button>
    // </form>
    <Flex>
    <Box flex={1}>
      <form>
        <FormControl id="firstName" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="lastName" isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="phoneNumber" isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input type="tel" />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>

        <Button variant="red" type="submit">
          Submit
        </Button>
      </form>
    </Box>
    <Box flex={1} bg="blue" color="white" p={4}>
    <p>test</p>
    </Box>
  </Flex>
  );
}

export default ContactForm;