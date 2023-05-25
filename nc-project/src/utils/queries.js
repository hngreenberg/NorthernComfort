import { gql } from '@apollo/client';

export const GET_ADMIN = gql`
  query admin {
    admin {
      _id
      username
      email
    }
  }
`;

export const GET_CONTACT_MESSAGES = gql`
  query ContactMessages {
    contactMessages {
      _id
      email
      firstName
      lastName
      message
      phoneNumber
    }
  }
`;