import {combineReducers, applyMiddleware, createStore} from "redux";
import {routerReducer} from "react-router-redux";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import RecipeReducer from "./RecipeReducer";

const rootReducer = combineReducers({
  recipes: RecipeReducer,
  routing: routerReducer
});

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}));
const store = createStore(rootReducer, middleware);

export default store;
