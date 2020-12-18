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
    ${clientSchema}
    ${userSchema}
    ${observationSchema}
    ${clientFileSchema}
`;

module.exports = typeDefs;