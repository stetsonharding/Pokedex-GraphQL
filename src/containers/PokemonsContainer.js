import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/fetch-pokemons";

import Pokemon from "../components/Pokemon";
import Search from "../components/Search";
import "../../src/css/PokemonsContainer.css";

function PokemonsContainer() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 12 },
  });

  const searchedPokemons = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchQuery)
  );

  console.log(searchedPokemons);

  return (
    <>
      <div>
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </div>
      <div className="pokemons-container">
        {/* if pokemons array is not null, iterate through array, and pass each item to pokemon cards componenet via props */}
        {pokemons &&
          pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <Pokemon pokemon={pokemon} searchedPokemons={searchedPokemons} />
            </div>
          ))}
        {/* <Pokemon /> */}
      </div>
    </>
  );
}

export default PokemonsContainer;
