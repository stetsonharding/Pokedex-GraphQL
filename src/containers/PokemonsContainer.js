import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Pokemon from "../components/Pokemon";

import { GET_POKEMONS } from "../graphql/fetch-pokemons";

function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 100 },
  });

  console.log(pokemons);

  return (
    <div className="pokemons-container">
      <Pokemon />
    </div>
  );
}

export default PokemonsContainer;
