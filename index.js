import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typedefs } from "./schema";
// server setup

const server = new ApolloServer({
    // typedefs => def of types of data
    typeDefs,
    // resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server is ready at port', 4000)