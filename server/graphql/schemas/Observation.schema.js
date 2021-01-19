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
  }

  input ObservationInput {
    description: String
}`;

  module.exports = observationSchema;



