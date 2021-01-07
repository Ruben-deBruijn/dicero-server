const observationFileSchema = 

` extend type Query {
    getObservationFile(id: ID!): ObservationFile
    getObservationFiles: [ObservationFile]
  }

  extend type Mutation {
    addObservationFile(observationFile: ObservationFileInput): ObservationFile,
    updateObservationFile(id: ID!, observationFile: ObservationFileInput): ObservationFile
    deleteObservationFile(id: ID!): ID!,
  }

  type ObservationFile {
      id: ID!
      shift: String!
      observations: [Observation]
      client: Client
      user: User
  }

  input ObservationFileInput {
    shift: String
    observations: [ID]
    client: ID
    user: ID
}`;

  module.exports = observationFileSchema;



