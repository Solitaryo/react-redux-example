import React, { Component } from "react";
import Nav from "./components/Nav";
import SearchInput from "./components/SearchInput";
import RecipeList from "./components/Recipes/RecipeList";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <div className="container" style={{marginTop: 50}}>
          <div className="row">
            <SearchInput />
          </div>
          <div className="row">
            <RecipeList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
