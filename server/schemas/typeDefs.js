const typeDefs = `
    type User {
        username: String
        email: String
        password: String
    }

    type Query {
        users: [User]
        user(username: String!): User
      }
`;

module.exports = typeDefs;
