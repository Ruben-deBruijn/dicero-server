const ClientFile = require('../../mongoose/ClientFile.model');

const clientFileResolvers = {
    // Queries
    Query: {
        getClientFiles: async() => ClientFile.find(),
        getClientFile: async (_,{ id }) => {
            const result = await ClientFile.findById(id);
            return result;
        }
    },

    // Mutations
    Mutation: {
        addClientFile: async (_, { clientFile }) => {
            console.log(clientFile)
            const newClientFile = new ClientFile({ ...clientFile });
            await newClientFile.save();
            return newClientFile;
        },
        updateClientFile: async (_, { id, clientFile }) => {
            const updatedClientFile = await ClientFile.findByIdAndUpdate(id, clientFile);
            return updatedClientFile;
        },
        deleteClientFile: async (_, {id}) => {
            await ClientFile.findByIdAndDelete(id);
            return `Succesfully deleted clientFile with id: ${id}`;
        }
    },

    // Populate
    ClientFile: {
        client: async clientFile => (await clientFile.populate('client').execPopulate()).client,
        user: async clientFile => (await clientFile.populate('user').execPopulate()).user,
        observations: async clientFile => (await clientFile.populate('observations').execPopulate()).observations,
    },
  };

  module.exports = clientFileResolvers;