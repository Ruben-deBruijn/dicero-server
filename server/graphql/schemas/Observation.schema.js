const observationSchema = 

` extend type Query {
    getObservation(id: ID!): Observation
    getObservations: [Observation]
  }

  extend type Mutation {
    addObservation(observation: ObservationInput): Observation,
    deleteObservation(id: ID!): ID!,
    updateObservation(id: ID!, observation: ObservationInput): Observation
  }

  type Observation {
      id: ID!
      description: String!
      client: Client
      user: User
  }

  input ObservationInput {
    description: String
    client: ID
    user: ID
}`;

  module.exports = observationSchema;



