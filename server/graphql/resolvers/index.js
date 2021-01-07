const clientResolvers = require("./Client.resolver");
const observationFileResolvers = require("./ObservationFile.resolver");
const observationResolvers = require("./Observation.resolver");
const userResolvers = require("./User.resolver");

const resolvers = [
    clientResolvers,
    observationFileResolvers,
    observationResolvers,
    userResolvers,
];

module.exports = resolvers;