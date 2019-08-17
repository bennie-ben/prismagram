require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";

const ENV = process.env
const PORT = ENV.PORT || 4000

const typeDefs = `
    type Query{
        hello: String!
    }
`
const resolvers = {
    Query: {
        hello:()=>"hello"
    }
}

const server = new GraphQLServer({typeDefs, resolvers})

server.start({port:PORT}, ()=>{
    console.log(`✨  GraphQL Server is On : http://localhost:${PORT}`)
})