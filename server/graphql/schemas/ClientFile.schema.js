const clientFileSchema = 

` extend type Query {
    getClientFile(id: ID!): ClientFile
    getClientFiles: [ClientFile]
  }

  extend type Mutation {
    addClientFile(clientFile: ClientFileInput): ClientFile,
    deleteClientFile(id: ID!): ID!,
  }

  type ClientFile {
      id: ID!
      observations: [Observation]
      client: Client
      user: User
  }

  input ClientFileInput {
    observations: [ID]
    client: ID
    user: ID
}`;

  module.exports = clientFileSchema;



