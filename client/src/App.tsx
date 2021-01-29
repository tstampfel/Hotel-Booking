import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/routes";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    process.env.PUBLIC_URL === "development"
      ? process.env.PUBLIC_URL
      : "http://localhost:4000/graphql",
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
