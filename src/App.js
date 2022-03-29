import React, { useState } from "react";
import PokemonsContainer from "./containers/PokemonsContainer";

//Apollo allows us to git a graphQl endpoint.
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "../src/App.css";

function App() {
  //State for holding pokemons search query.

  //Setting up GraphQL request.
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
