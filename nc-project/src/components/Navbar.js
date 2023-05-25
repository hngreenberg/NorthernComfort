import React from "react";
import {
    Flex,
    Box,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react';
import AuthService from '../utils/auth';

function Navbar() {
    return (
        <nav style={{
          fontFamily: "'Jost",
          fontWeight: "bold",
          fontSize: "18px",
          position: "relative",
          zIndex:1,
         }} >
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

        {AuthService.loggedIn() && (
          <BreadcrumbItem>
            <BreadcrumbLink href='messages'>Messages</BreadcrumbLink>
          </BreadcrumbItem>
        )}
          <BreadcrumbItem>
            {AuthService.loggedIn() ? (
              <BreadcrumbLink onClick={AuthService.logout}>Logout</BreadcrumbLink>
            ) : (
            <BreadcrumbLink href='login'>Admin Login</BreadcrumbLink>
            )}
          </BreadcrumbItem>
          
          {/* {AuthService.loggedIn() ? (
          <BreadcrumbItem>
            <BreadcrumbLink href='signup'>Admin Signup</BreadcrumbLink>
          </BreadcrumbItem>
          ) : (
          <BreadcrumbItem>
            <BreadcrumbLink href='signup'></BreadcrumbLink>
          </BreadcrumbItem>
          )} */}

        </Breadcrumb>
             
             </Box>
             </Flex>
        </nav>
    )
};
    

export default Navbar;

 
