import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    // BreadcrumbSeparator,
  } from '@chakra-ui/react'

  import { Box, Flex } from "@chakra-ui/react"

function Navbar() {
    return (
        // <nav className="navbar">
        //     <a href="/" className="home">Home</a>
        //     <ul>
        //         <li>
        //             <a href="about">About Us</a>
        //         </li>
        //         <li>
        //             <a href="service">Service Area</a>
        //         </li>
        //         <li>
        //             <a href="reviews">Reviews</a>
        //         </li>
        //         <li>
        //             <a href="contact">Contact Us</a>
        //         </li>
        //     </ul>
        // </nav>
        <nav style={{
          fontFamily: "'Jost",
          fontWeight: "bold",
          fontSize: "18px", }} >
          
            <Flex align="center" justify="right">
            <Box display="flex" alignItems="center" justifyContent="space-between">
        <Breadcrumb spacing="8px" >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
     
      
        <BreadcrumbItem>
          <BreadcrumbLink href='about'>About</BreadcrumbLink>
        </BreadcrumbItem>
      
        <BreadcrumbItem >
          <BreadcrumbLink href='services'>Service Area</BreadcrumbLink>
        </BreadcrumbItem>
  

        <BreadcrumbItem>
        <BreadcrumbLink href='reviews'>Review</BreadcrumbLink>
        </BreadcrumbItem> 

        <BreadcrumbItem>
          <BreadcrumbLink href='contact'>Contact</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='login'>Admin Login</BreadcrumbLink>
        </BreadcrumbItem>

        </Breadcrumb>
             
             </Box>
             </Flex>
        </nav>
    )
};
    

export default Navbar;

 
