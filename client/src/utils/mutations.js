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
        email
        password
        players {
          _id
          playerName
          jersey
          stats
        }
      }
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayer($username: String!, $playerName: String!, $jersey: String!, $stats: String!) {
    addPlayer(username: $username, playerName: $playerName, jersey: $jersey, stats: $stats) {
      username
      players {
        playerName
        jersey
        stats
      }
    }
  }
`;

export const REMOVE_PLAYER = gql`
  mutation removePlayer($username: String!, $removePlayerId: String!) {
    removePlayer(username: $username, removePlayerId: $removePlayerId) {
      username
      players {
        _id
      }
    }
  }
`;