import { gql } from '@apollo/client';

export const LOGIN_ADMIN = gql`
  query admin {
    admin {
      _id
      username
      email
    }
  }
`;