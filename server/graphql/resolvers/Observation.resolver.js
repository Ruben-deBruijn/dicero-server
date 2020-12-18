const Observation = require('../../mongoose/Observation.model');

const observationResolvers = {
    // Queries
    Query: {
        getObservations: async() => Observation.find(),
        getObservation: async (_,{ id }) => {
            const result = await Observation.findById(id);
            return result;
        }
    },

    // Mutations
    Mutation: {
        addObservation: async (_, { observation }) => {
            const newObservation = new Observation({ ...observation });
            await newObservation.save();
            return newObservation;
        },
        updateObservation: async (_, { id, observation }) => {
            const updatedObservation = await Observation.findByIdAndUpdate(id, observation);
            return updatedObservation;
        },
        deleteClientFile: async (_, {id}) => {
            await Observation.findByIdAndDelete(id);
            return `Succesfully deleted observation with id: ${id}`;
        }
    },

    // Populate
    Observation: {
        client: async observation => (await observation.populate('client').execPopulate()).client,
        user: async observation => (await observation.populate('user').execPopulate()).user,
    },
  };

  module.exports = observationResolvers;