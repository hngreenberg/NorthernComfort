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
  import { Link } from "react-router-dom";
import AuthService from '../utils/auth';

function Navbar() {
    return (
        <nav style={{
          fontFamily: "Jost",
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
          <Link to='/about'>About</Link>
        </BreadcrumbItem>
      
        <BreadcrumbItem >
          <Link to='/services'>Service Area</Link>
        </BreadcrumbItem>
  

        <BreadcrumbItem>
        <Link to='/reviews'>Review</Link>
        </BreadcrumbItem> 

        <BreadcrumbItem>
          <Link to='/contact'>Contact</Link>
        </BreadcrumbItem>

        {AuthService.loggedIn() && (
          <BreadcrumbItem>
            <Link to='/messages'>Messages</Link>
          </BreadcrumbItem>
        )}
          <BreadcrumbItem>
            {AuthService.loggedIn() ? (
              <Link onClick={AuthService.logout}>Logout</Link>
            ) : (
            <Link to='/login'>Admin Login</Link>
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

 
