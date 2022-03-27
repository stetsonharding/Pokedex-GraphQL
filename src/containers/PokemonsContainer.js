import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Pokemon from "../components/Pokemon";

import { GET_POKEMONS } from "../graphql/fetch-pokemons";

import "../../src/css/PokemonsContainer.css";

function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 32 },
  });

  return (
    <div className="pokemons-container">
      {/* if pokemons array is not null, iterate through array, and pass each item to pokemon cards componenet via props */}
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <Pokemon pokemon={pokemon} />
          </div>
        ))}
      {/* <Pokemon /> */}
    </div>
  );
}

export default PokemonsContainer;
