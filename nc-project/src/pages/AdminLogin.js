import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_ADMIN } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';

import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error, data }] = useMutation(LOGIN_ADMIN);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);

      setUserFormData({
        username: '',
        email: '',
        password: '',
      });

      navigate.push('/messages');

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', border: '2px solid blue', borderRadius: '3%', padding: '20px', marginRight: '35%', marginLeft: '35%'}}>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <Form.Group className='mb-3'> */}
          <Form.Label htmlFor='email' style={{ fontWeight: 'bold', color: 'blue' }}>Email:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
            style={{ borderColor: 'blue', fontWeight: 'bold', color: 'blue' }}
          />
          {/* <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback> */}
        {/* </Form.Group> */}
        </div>

        {/* <Form.Group className='mb-3'> */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Form.Label htmlFor='password' style={{ fontWeight: 'bold', color: 'blue' }}>Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
            style={{ borderColor: 'blue', fontWeight: 'bold', color: 'blue' , marginBottom: '10px'}}
          />
          {/* <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback> */}
        {/* </Form.Group> */}
        </div>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
          style={{ backgroundColor: 'blue', border: '2px solid blue', borderRadius: '2%', color: 'white', fontWeight: 'bold' }}>
          Login
        </Button>
      </Form>
      </div>
    </>
  );
};

export default LoginForm;
