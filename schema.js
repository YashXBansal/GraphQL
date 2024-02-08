export const typedefs = `#graphql
    type Game{
        id: ID!
        title: String!
        Platform: [String]!
    }
    type Review{
        id: ID!,
        rating: Int!
        content: String!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!

    }
    type Query{
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }
`
