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