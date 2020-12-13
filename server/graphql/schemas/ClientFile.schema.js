const clientFileSchema = 

`extend type Query {
    getClientFile(id: ID!): Observation
    getClientFiles: [Clientfile]
  }
  type ClientFile {
      id: ID!
      observation: [observation]
      client: [client]
      user: [user]
  }
  extend type Mutation {
      addClientFile(observation: [observation], client:[client], user:[user]): ClientFile!,
      deleteClientFile(id: ID!): String,
      updateClientFile(id: ID!, observation: [observation], client:[client], user:[user]): ClientFile!
  }`;

  module.exports = clientFileSchema;



