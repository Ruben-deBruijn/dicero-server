const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');

const graphQlServer = new GraphQLServer({ typeDefs, resolvers });

mongoose.connect(
   "mongodb+srv://arjtechnologies2020:arjtechnologies2020@arj-tech.ndlz3.mongodb.net/test?retryWrites=true&w=majority",
   {  useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
   });

mongoose.connection.once("open", () => {
   graphQlServer.start({ endpoint: '/graphql'}, () => console.log('GraphQl is running on localhost:4000'))
});