const gql = require("graphql-tag");

module.exports = gql`
  type Nation {
    country: String
    year: String
    squareKilometres: Int
    totalPopulation: Int
  }

  input NationInput {
    country: String
    year: String
    squareKilometres: Int
    totalPopulation: Int
  }

  type Query {
    readNation(ID: ID!): Nation!
    getNation(length: Int): [Nation]
  }

  type Mutation {
    createNation(nationInput: NationInput): Nation!
    deleteNation(ID: ID!): Boolean
    editNation(ID: ID!, nationInput: NationInput): Boolean
  }
`;
