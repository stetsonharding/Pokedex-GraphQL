import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/fetch-pokemons";

import Pokemon from "../components/Pokemon";
import Search from "../components/Search";
import "../../src/css/PokemonsContainer.css";

function PokemonsContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState([]);

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 12 },
  });

  const handleQuerySearch = (e) => {
    //Storing user input in state
    setSearchQuery(e.target.value);

    //Searching pokemons array with user input
    //Storing  searched results in new array.
    setSearchedPokemon(
      pokemons.filter((pokemon) => pokemon.name.includes(searchQuery))
    );

    if (searchQuery === "") {
      // setSearchQuery("");
      // setSearchedPokemon([]);
      console.log(true);
    }
  };

  console.log(searchQuery);

  return (
    <>
      <div>
        <Search
          handleQuerySearch={handleQuerySearch}
          searchQuery={searchQuery}
        />
      </div>
      <div className="pokemons-container">
        {/* if Searched pokemons array has any items in it, hide all pokemons and show searched array, if searched pokemons array is empty show all pokemons */}
        {searchedPokemon.length <= 0
          ? pokemons.map((pokemon) => (
              <div key={pokemon.id}>
                <Pokemon
                  name={pokemon.name}
                  maxHP={pokemon.maxHP}
                  maxCP={pokemon.maxCP}
                  image={pokemon.image}
                  attacks={pokemon.attacks}
                />
              </div>
            ))
          : searchedPokemon &&
            searchedPokemon.map((pokemon) => (
              <div key={pokemon.id}>
                <Pokemon
                  name={pokemon.name}
                  maxHP={pokemon.maxHP}
                  maxCP={pokemon.maxCP}
                  image={pokemon.image}
                  attacks={pokemon.attacks}
                />
              </div>
            ))}
      </div>
    </>
  );
}

export default PokemonsContainer;
