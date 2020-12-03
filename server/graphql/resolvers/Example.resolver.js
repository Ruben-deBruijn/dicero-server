const Example = require('../../mongoose/Example.model');

const exampleResolvers = {
    Query: {
      getExamples: () => Example.find(),
      getExample: async (_,{ id }) => {
        const result = await Example.findById(id);
        return result;
    }
},
    Mutation: {
        addExample: async (_, { title }) => {
            const example = new Example({ title });
            await example.save();
            return example;
        },
        deleteExample: async (_, {id}) => {
            await Example.findByIdAndRemove(id);
            return "Example deleted";
        }
    }
  };

  module.exports = exampleResolvers;