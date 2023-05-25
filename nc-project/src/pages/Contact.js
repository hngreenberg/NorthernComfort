import React, { useState } from 'react';
import {   
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Flex,
    Box,
} from "@chakra-ui/react";
import { useMutation } from '@apollo/client';
import { ADD_CONTACT_MESSAGE } from '../utils/mutations';

function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [addContactMessage, { loading, error }] = useMutation(
    ADD_CONTACT_MESSAGE
  );

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addContactMessage({
        variables: { ...formState },
      });
      console.log(data);
      setFormState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Flex>
      <Box flex={1}>
        <form onSubmit={handleFormSubmit}>
          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="lastName" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              value={formState.lastName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="phoneNumber"
              value={formState.phoneNumber}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button type="submit" isLoading={loading}>
            Submit
          </Button>
        </form>
      </Box>
    {/* <Box flex={1}>
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
    </Box> */}
    <Box flex={1} bg="blue" color="white" p={4} display="flex" alignItems="center" justifyContent="center" fontSize="20px">
    <div>
        <h2 class="contactHeader" mb={4} fontWeight="600">NORTHERN COMFORT LLC</h2>
        <p>Arlington, WA 98223</p>

        <h3 class="contactHeader" mb={2} fontWeight="600">CALL US</h3>
        <p fontWeight="600">Phone: <a href="tel:+14255884139" style={{ color: "red" }}>(425) 588-4139</a></p>

        <h3 class="contactHeader" mb={2} fontWeight="600">HOURS</h3>
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