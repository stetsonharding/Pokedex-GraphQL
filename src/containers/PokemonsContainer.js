import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/fetch-pokemons";

import Pokemon from "../components/Pokemon";
import Search from "../components/Search";
import "../../src/css/PokemonsContainer.css";

function PokemonsContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedPokemon, setSeaerchedPokemon] = useState([]);

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 12 },
  });

  const handleQuerySearch = (e) => {
    //Storing user input in state
    setSearchQuery(e.target.value);

    //Searching pokemons array with user input
    //Storing  searched results in new array.
    setSeaerchedPokemon(
      pokemons.filter((pokemon) => pokemon.name.includes(searchQuery))
    );

    // if (searchQuery === null) {
    //   setSearchQuery("");
    //   setSeaerchedPokemon([]);
    // }
  };

  // console.log(searchedPokemon);

  return (
    <>
      <div>
        <Search
          handleQuerySearch={handleQuerySearch}
          searchQuery={searchQuery}
        />
      </div>
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
    </>
  );
}

export default PokemonsContainer;
