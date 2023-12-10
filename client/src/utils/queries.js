import { gql } from '@apollo/client';

export const GET_PLAYERS = gql`
query User($username: String!) {
    user(username: $username) {
      username
      players {
        _id
        playerName
        jersey
        stats
      }
    }
  }
`