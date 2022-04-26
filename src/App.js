import React from "react";
import PokemonsContainer from "./containers/PokemonsContainer";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "./graphql/fetch-pokemons";
import "../src/App.css";

function App() {
  //graphql data
  const {
    loading,
    error,
    data: { pokemons = [] } = {},
  } = useQuery(GET_POKEMONS, {
    variables: { first: 120 },
  });

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <main>
      <PokemonsContainer pokemons={pokemons} />
    </main>
  );
}

export default App;
