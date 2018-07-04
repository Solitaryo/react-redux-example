import React, { Component } from "react";
import { connect } from 'react-redux';
import RecipeListItem from "./RecipeListItem";

class RecipeList extends Component {
  render () {
    const { recipes } = this.props.recipes
    return (
      <table className="table table-striped">
        <tbody>
          {recipes.map((recipe, key) =>
            <RecipeListItem
              key={`rli${key}`}
              title={recipe.title}
              link={recipe.href} /> )}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeList);