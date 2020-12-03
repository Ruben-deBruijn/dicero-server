const exampleSchema = require('./Example.schema');

const typeDefs = `
    type Query{
        _empty: String
    }
    type Mutation {
        _empty: String
    }
    ${exampleSchema}
`;

module.exports = typeDefs;