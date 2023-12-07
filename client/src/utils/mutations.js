import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayer($name: String!, $jersey: String!, $stats: String!, $username: String!) {
    addUser(name: $name, jersey: $jersey, stats: $stats, username: $username) {
      player {
        _id
        name
      }
    }
  }
`;