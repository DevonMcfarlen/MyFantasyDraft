import { gql } from '@apollo/client';

export const QUERY_USER = gql `
query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
        player {
            _id
            playerName
            jersey
            stats
        }
    }
}
`;

export const QUERY_PLAYER = gql`
    query player {
        player {
            _id
            playerName
            jersey
            stats
        }
    }
`;

/*
export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            player {
                _id
                playerName
                jersey
                stats
            }
        }
    }
`*/