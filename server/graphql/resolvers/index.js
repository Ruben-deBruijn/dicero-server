const clientResolvers = require("./Client.resolver");
const clientFileResolvers = require("./ClientFile.resolver");
const observationResolvers = require("./Observation.resolver");
const userResolvers = require("./User.resolver");

const resolvers = [
    clientResolvers,
    clientFileResolvers,
    observationResolvers,
    userResolvers,
];

module.exports = resolvers;