const observationSchema = 

`extend type Query {
    getObservation(id: ID!): Observation
    getObservations: [Observation]
  }
  type Observation {
      id: ID!
      description: String!
      client: [client]
      user: [user]
  }
  extend type Mutation {
      addObservation(description: String!, client:[client], user:[user]): Observation!,
      deleteObservation(id: ID!): String,
      updateObservation(id: ID!, description: String!, client:[client], user:[user]): Observation!
  }`;

  module.exports = observationSchema;



