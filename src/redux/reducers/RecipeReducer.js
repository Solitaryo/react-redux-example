import * as ApiConstants from "../../config/ApiConstants";

const defaultState = {
  title: "",
  version: "",
  href: "",
  recipes: []
}

const RecipeReducer = (state = defaultState, action = {}) => {
  switch(action.type) {
    case ApiConstants.GET_RECIPES_SUCCESS : {
      return {
        ...state,
        recipes: action.data.results.length > 20 ? action.data.results.slice(0, 19) : action.data.results,
        error: false
      }
    }
    case ApiConstants.GET_RECIPES_ERROR : {
      return {
        ...state,
        error: action.data
      }
    }
    default: {
      return state;
    }
  }
}

export default RecipeReducer;