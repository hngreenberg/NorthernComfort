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

  const [responded, setResponded] = useState({});

  const handleReplyClick = (email) => {
    setResponded((prevState) => ({ ...prevState, [email]: true }));
    window.location.href = `mailto:${email}`;
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <h1 style={{ fontWeight: 'bold', color: 'lightcoral', textAlign: 'center', marginTop: '20px', fontSize: '25px'}}>Welcome, Admin!</h1>
      <ul style={{ listStyleType: 'none', marginLeft: '18%'}}>
        {contactMessages.map((message) => (
          <li key={message._id} style={{ margin: '25px' , borderBottom: '2px dashed lightblue', width: '75%' }}>
            <p> <span style={{ fontWeight: 'bold', color: 'lightblue' }}>Name:</span><span style={{ fontStyle: 'italic' , color: 'blue'}}>{message.firstName} {message.lastName}</span></p>
            <p><span style={{ fontWeight: 'bold', color: 'lightblue' }}>Email:</span> {message.email}<a href={`mailto:${message.email}`} style={{ fontWeight: 'bold', color: 'blue' }} onClick={() => handleReplyClick(message.email)}> Reply</a>{responded[message.email] && <span style={{ fontWeight: 'bold', color: 'green' }}> Responded</span>}</p>
            <p><span style={{ fontWeight: 'bold', color: 'lightblue' }}>Message:</span> {message.message}</p>
          </li>
        ))}
      </ul>
    </>
  );

};

export default ContactMessages;
