const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const MONGODB_URL = require("./mongoUrl");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    return server.listen({ port: 5000 });
  })
  .then((result) => {
    console.log(`Server running on port ${result.url}`);
  });
