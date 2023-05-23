import React from 'react';
import { Button } from "@chakra-ui/react";

function ContactForm() {
  return (
    <form>
    
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" required />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <Button variant="red" type="submit">Submit</Button>
    </form>
  );
}

export default ContactForm;