import React from "react";
import PokemonsContainer from "./containers/PokemonsContainer";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "./graphql/fetch-pokemons";
import "../src/App.css";

function App() {
  //graphql data
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 120 },
  });

  return (
    <main>
      <PokemonsContainer pokemons={pokemons} />
    </main>
  );
}

export default App;
