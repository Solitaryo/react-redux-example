import Request from "./Request";

class RecipeModel {
  getRecipes (data) {
    return Request.connection("GET", data);
  }
}

export default new RecipeModel();