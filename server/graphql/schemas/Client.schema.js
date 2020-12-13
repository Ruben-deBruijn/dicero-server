const clientSchema = 

`extend type Query {
    getClient(id: ID!): Client
    getClients: [Client]
  }
  type Client {
      id: ID!
      name: String!
      email: String!
      address: String!
      city: String!
      postalcode: String!
  }
  extend type Mutation {
      addClient(name: String!, email: String!, address: String!, city: String!, postalcode: String!): Client!,
      deleteClient(id: ID!): String,
      updateClient(id: ID!, name: String!, email: String!, address: String!, city: String!, postalcode: String!): Client!
  }`;

  module.exports = clientSchema;

