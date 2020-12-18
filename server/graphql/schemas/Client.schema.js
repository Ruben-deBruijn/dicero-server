const clientSchema = 

` extend type Query {
    getClient(id: ID!): Client
    getClients: [Client]
  }

  extend type Mutation {
    addClient(client: ClientInput): Client,
    deleteClient(id: ID!): ID!,
    updateClient(id: ID!, client: ClientInput): ID!
  }

  type Client {
    id: ID!
    name: String!
    email: String!
    address: String!
    city: String!
    postal_code: String!
  }

  input ClientInput {
    name: String
    email: String
    address: String
    city: String
    postal_code: String
}`;

  module.exports = clientSchema;

