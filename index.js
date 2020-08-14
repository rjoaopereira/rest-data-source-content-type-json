const { ApolloServer, gql } = require("apollo-server");
const { HelloDataSource } = require("./hello-world-resolver");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String,
    bye: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return context.dataSources.helloAPI.fails("hello")
    },
    bye: (root, args, context) => {
      return context.dataSources.helloAPI.succeeds({prop: "hello"})
    },
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      helloAPI: new HelloDataSource()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
