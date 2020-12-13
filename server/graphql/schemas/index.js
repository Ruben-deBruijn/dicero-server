const exampleSchema = require('./Example.schema');
const clientSchema = require('./Client.schema');
const userSchema = require('./User.schema');
const observationSchema = require('./Observation.schema');
const clientFileSchema = require('./ClientFile.schema');

const typeDefs = `
    type Query{
        _empty: String
    }
    type Mutation {
        _empty: String
    }
    ${exampleSchema}
    ${clientSchema}
    ${userSchema}
    ${observationSchema}
    ${clientFileSchema}
`;

module.exports = typeDefs;