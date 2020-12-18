const userSchema = 

` extend type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  extend type Mutation {
    addUser(user: UserInput): User,
    deleteUser(id: ID!): ID!,
    updateUser(id: ID!, user: UserInput): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    address: String!
    city: String!
    postal_code: String!
    job_title: String!
  }

  input UserInput {
    name: String
    email: String
    address: String
    city: String
    postal_code: String
    job_title: String
}`;

  module.exports = userSchema;

