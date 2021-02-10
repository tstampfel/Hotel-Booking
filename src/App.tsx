import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Routes from "../src/components/routes/routes";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_NODE_URL_PROD + "/graphql"
      : process.env.REACT_APP_NODE_URL + "/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <div className="App" data-testid="app">
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <Routes />
          </Router>
        </Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;
