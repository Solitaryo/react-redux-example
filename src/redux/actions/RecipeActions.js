import * as ApiConstants from "../../config/ApiConstants";
import RecipeModel from "../api/RecipeModel";

export function getRecipes (data) {
  return dispatch => {
    RecipeModel.getRecipes(data)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: ApiConstants.GET_RECIPES_SUCCESS, data: json });
      })
      .catch(err => {
        dispatch({ type: ApiConstants.GET_RECIPES_ERROR, data: err })
      })
  }
}