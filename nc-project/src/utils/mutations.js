import { gql } from '@apollo/client';

export const LOGIN_ADMIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      admin {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_ADMIN = gql`
  mutation addAdmin($username: String!, $email: String!, $password: String!) {
    addAdmin(username: $username, email: $email, password: $password) {
      token
      admin {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_CONTACT_MESSAGE = gql`
  mutation addContactMessage($firstName: String!, $lastName: String!, $phoneNumber: String!, $email: String!, $message: String!) {
    addContactMessage(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, message: $message) {
      token
      contactMessage {
        _id
        username
        email
      }
    }
  }
`;