import React from "react";
import PokemonsContainer from "./containers/PokemonsContainer";

//Apollo allows us to git a graphQl endpoint.
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import "../src/App.css";

import ReactPaginate from "react-paginate";

function App() {
  //State for holding pokemons search query.

  //Setting up GraphQL request.
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
  });

  const handlePageClick = (data, pokemons) => {
    console.log("clicked");
  };

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={25}
          marginPagesDisplayed={3}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
        />
      </main>
    </ApolloProvider>
  );
}

export default App;
