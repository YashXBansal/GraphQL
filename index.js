import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import _db from "./_db.js";
// server setup

const resolvers = {
  Query: {
    games() {
      return _db.games;
    },
    game(_, args) {
      return _db.games.find((game) => game.id === args.id);
    },
    authors() {
      return _db.authors;
    },
    author(_, args) {
      return _db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return _db.reviews;
    },
    review(_, args) {
      return _db.reviews.find((review) => review.id === args.id);
    },
  },
};

const server = new ApolloServer({
  // typedefs => def of types of data
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server is ready at port", 4000);
