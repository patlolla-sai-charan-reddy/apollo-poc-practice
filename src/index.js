import React, { Component } from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
});

class App extends Component {
  state = { selectedDog: null };

  onDogSelected = ({ target }) => {
    this.setState(() => ({ selectedDog: target.value }));
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>Building Query components 🚀</h2>
        </div>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
