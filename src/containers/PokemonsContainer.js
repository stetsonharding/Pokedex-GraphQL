import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/fetch-pokemons";

import Pokemon from "../components/Pokemon";
import Search from "../components/Search";
import Header from "../components/Header";
import "../../src/css/PokemonsContainer.css";

function PokemonsContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState([]);

  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 150 },
  });

  const handleQuerySearch = (e) => {
    //Keeping track of user query.
    let userQuery = e.target.value;
    //Capitalized first Character in user query, because all Pokemon's starts with capitalized letter.
    const capatalizedFirstCharQuery =
      userQuery.slice(0, 1).toUpperCase() +
      userQuery.slice(1, userQuery.length);

    //Storing user input in state
    setSearchQuery(capatalizedFirstCharQuery);

    //Searching pokemons array with user input
    //Storing searched results in new state.
    setSearchedPokemon(
      pokemons.filter((pokemon) => pokemon.name.includes(searchQuery))
    );

    //If user deletes search query,
    //set searched pokemon state to empty, so all pokemons will display.
    if (capatalizedFirstCharQuery === "") {
      setSearchedPokemon([]);
    }
  };

  return (
    <>
      <div>
        <Header
          handleQuerySearch={handleQuerySearch}
          searchQuery={searchQuery}
        />
        {/* <Search
          handleQuerySearch={handleQuerySearch}
          searchQuery={searchQuery}
        /> */}
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
