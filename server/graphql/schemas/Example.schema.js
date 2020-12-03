const exampleSchema = 

`extend type Query {
    getExample(id: ID!): Example
    getExamples: [Example]
  }
  type Example {
      id: ID!
      title: String!
  }
  extend type Mutation {
      addExample(title: String!): Example!,
      deleteExample(id: ID!): String
  }`;

  module.exports = exampleSchema;