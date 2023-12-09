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
  mutation addPlayer($playerId:ID!,$name: String!, $jersey: String!, $stats: String!, $playername: String!) {
    addPlayer(name: $name, jersey: $jersey, stats: $stats, playerName: $playerName, playerId:$playerId) {
      player {
        _id
        name
        playerName
        jersey
        stats {
          assists
          points
          totReb
          fgp
        }
      }
    }
  }
`;