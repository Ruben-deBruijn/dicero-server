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
   " * connection string Atlas here * ",
   {  useNewUrlParser: true,
      useUnifiedTopology: true,
   });

mongoose.connection.once("open", () => {
   graphQlServer.start({ endpoint: '/graphql'}, () => console.log('GraphQl is running on localhost:4000'))
});