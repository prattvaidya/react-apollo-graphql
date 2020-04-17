import React from "react";
import "./App.css";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import Container from "@material-ui/core/Container";

import AddContact from "./components/forms/AddContact";
import Contacts from "./components/lists/Contacts";
import Title from "./components/layout/Title";

const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className="App">
        <Title />
        <AddContact />
        <Contacts />
      </Container>
    </ApolloProvider>
  );
}

export default App;
