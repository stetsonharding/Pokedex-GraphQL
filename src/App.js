import React, { useState } from "react";
import PokemonsContainer from "./containers/PokemonsContainer";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "./graphql/fetch-pokemons";
import "../src/App.css";

import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(16);

  //graphql data
  const {
    loading,
    error,
    data: { pokemons = [] } = {},
  } = useQuery(GET_POKEMONS, {
    variables: { first: 150 },
  });

  const indexOfLastPokemons = currentPage * pokemonsPerPage;
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemons,
    indexOfLastPokemons
  );

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <main>
      <PokemonsContainer pokemons={currentPokemons} allPokemons={pokemons} />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={pokemons.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </main>
  );
}

export default App;
