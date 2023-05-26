import React from 'react';
import "../Fonts.css";
import { Box, Text } from '@chakra-ui/react'



function Services() {
  return (
    <>
    <Box style={{
      fontFamily: "'Satisfy', cursive",
      textShadow: "1px 1px 2px black",
      fontSize: "3em",
    }}>
        <Text>We OfferService Near You!!</Text>
    </Box>
    < Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d683659.7875878443!2d-122.30116914034113!3d47.98383358571857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549a9ee7ee7db1c9%3A0x670ec38a194c44a9!2sSnohomish%20County%2C%20WA!5e0!3m2!1sen!2sus!4v1684820771688!5m2!1sen!2sus"
        width="800"
        height="550"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
    </>
  );
}

export default Services;


