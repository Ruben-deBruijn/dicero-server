const userSchema = 

`extend type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }
  type User {
      id: ID!
      name: String!
      email: String!
      address: String!
      city: String!
      postalcode: String!
      jobtitle: String!
  }
  extend type Mutation {
      addUser(name: String!, email: String!, address: String!, city: String!, postalcode: String!, jobtitle: String!): User!,
      deleteUser(id: ID!): String,
      updateUser(id: ID!, name: String!, email: String!, address: String!, city: String!, postalcode: String!, jobtitle: String!): User!
  }`;

  module.exports = userSchema;

