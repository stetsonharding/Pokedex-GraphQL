// import "./App.css";

//Apollo allows us to git a graphQl endpoint.
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

function App() {
  //Setting up GraphQL request.
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.sh",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <p>I am a pokemon</p>
      </main>
    </ApolloProvider>
  );
}

export default App;
