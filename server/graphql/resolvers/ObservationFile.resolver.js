const ObservationFile = require('../../mongoose/ObservationFile.model');

const observationFileResolvers = {
    // Queries
    Query: {
        getObservationFiles: async() => {
            let results = await ObservationFile.find();
            return results;
        },
        getObservationFile: async (_,{ id }) => {
            const result = await ObservationFile.findById(id);
            return result;
        }
    },

    // Mutations
    Mutation: {
        addObservationFile: async (_, { observationFile }) => {
            const newObservationFile = new ObservationFile({ ...observationFile });
            await newObservationFile.save();
            return newObservationFile;
        },
        updateObservationFile: async (_, { id, observationFile }) => {
            const updatedObservationFile = await ObservationFile.findByIdAndUpdate(id, observationFile);
            return updatedObservationFile;
        },
        deleteObservationFile: async (_, {id}) => {
            await ObservationFile.findByIdAndDelete(id);
            return `Succesfully deleted ObservationFile with id: ${id}`;
        }
    },

    // Populate
    ObservationFile: {
        client: async observationFile => (await observationFile.populate('client').execPopulate()).client,
        user: async observationFile => (await observationFile.populate('user').execPopulate()).user,
        observations: async observationFile => (await observationFile.populate('observations').execPopulate()).observations,
    },
  };

  module.exports = observationFileResolvers;