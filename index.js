import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema.js";
import _db from "./_db.js";
// server setup

const resolvers = {
      Query: {
        games(){
            return _db.games
        },
        authors(){
            return _db.authors
      },
        reviews(){
            return _db.reviews
        }
      }
}

const server = new ApolloServer({
    // typedefs => def of types of data
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server is ready at port', 4000)