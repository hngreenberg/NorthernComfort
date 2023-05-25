import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ADMIN } from '../utils/queries';
import { GET_CONTACT_MESSAGES } from '../utils/queries';

const ContactMessages = () => {
  const {loading, data } = useQuery(GET_CONTACT_MESSAGES);

  const contactMessages = data?.contactMessages || [];

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <h1>Welcome, admin!</h1>
      <ul>
        {contactMessages.map((message) => (
          <li key={message._id}>
            <p>Name: {message.name}</p>
            <p>Email: {message.email}</p>
            <p>Message: {message.message}</p>
          </li>
        ))}
      </ul>
    </>
  );

};

export default ContactMessages;
