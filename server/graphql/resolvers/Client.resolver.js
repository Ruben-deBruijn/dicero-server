const Client = require('../../mongoose/Client.model');

const clientResolvers = {

    // Queries
    Query: {
        getClients: () => Client.find(),
        getClient: async (_,{ id }) => {
            const result = await Client.findById(id);
            return result;
        }
    },

    // Mutations
    Mutation: {
        addClient: async (_, { client }) => {
            const newClient = new Client({ ...client });
            await newClient.save();
            return newClient;
        },
        updateClient: async (_, { id, client }) => {
            await Client.findByIdAndUpdate(id, client);
            return id;
        },
        deleteClient: async (_, {id}) => {
            await Client.findByIdAndDelete(id);
            return `Succesfully deleted client with id: ${id}`;
        }
    }
  };

  module.exports = clientResolvers;