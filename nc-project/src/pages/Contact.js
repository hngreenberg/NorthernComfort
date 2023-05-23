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
    <Box flex={1} bg="blue" color="white" p={4} display="flex" alignItems="center" justifyContent="center">
        <div>
            <h2>NORTHERN COMFORT LLC</h2>
            <p>Arlington, WA 98223</p>

            <h3>CALL US</h3>
            <p>Phone: (425) 588-4139</p>

            <h3>HOURS</h3>
            <p>Mon: 8:00AM-8:00PM</p>
            <p>Tue: 8:00AM-8:00PM</p>
            <p>Wed: 8:00AM-8:00PM</p>
            <p>Thu: 8:00AM-8:00PM</p>
            <p>Fri: 8:00AM-8:00PM</p>
            <p>Sat: 8:00AM-8:00PM</p>
            <p>Sun: Closed</p>

            <p>24 Hour Emergency Services Available</p>
        </div>
    </Box>
  </Flex>
  );
}

export default ContactForm;