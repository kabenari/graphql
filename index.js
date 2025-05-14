const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
        type Todo {
        id : ID!
        title : String!
        completed: boolean
        }

        type Query{
        
        `,
    resolvers: {},
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => console.log("server start at port 8000"));
}

startServer();
