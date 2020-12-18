const User = require('../../mongoose/User.model');

const userResolvers = {
    // Queries
    Query: {
        getUsers: async() => User.find(),
        getUser: async (_,{ id }) => {
            const result = await User.findById(id);
            return result;
        }
    },

    // Mutations
    Mutation: {
        addUser: async (_, { user }) => {
            const newUser = new User({ ...user });
            await newUser.save();
            return newUser;
        },
        updateUser: async (_, { id, user }) => {
            const updatedUser = await User.findByIdAndUpdate(id, user);
            return updatedUser;
        },
        deleteUser: async (_, {id}) => {
            await User.findByIdAndDelete(id);
            return `Succesfully deleted user with id: ${id}`;
        }
    },
  };

  module.exports = userResolvers;