//allows us to write graphQL query thats parsed into standard graphQL AST.
//Pass queries to apollo client.

import { gql } from "@apollo/client";

//queries for graphQL.
export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      maxHP
      maxCP
      image
      types
      classification
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
