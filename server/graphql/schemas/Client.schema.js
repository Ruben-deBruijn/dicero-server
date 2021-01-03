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
    first_name: String!
    last_name: String!
    birthday: String!
    contact_person: String!
  }

  input ClientInput {
    first_name: String
    last_name: String
    birthday: String
    contact_person: String
}`;

  module.exports = clientSchema;

