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
  mutation addPlayer($playername: String!, $jersey: String!, $stats: String!) {
    addPlayer(playerName: $playerName, jersey: $jersey, stats: $stats) {
      player {
        _id
        playerName
        jersey
        stats
      }
    }
  }
`;


export const REMOVE_PLAYER = gql`
  mutation removePlayer($id: ID!, $username: String!) {
    removePlayer(id: $id, username: $username) {
      _id
      username
    }
  }
`;