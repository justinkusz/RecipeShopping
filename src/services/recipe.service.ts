import { Recipe } from "../shared/recipe";

export class RecipeService {
  private recipeList: Recipe[] = [];

  addRecipe(recipe: Recipe) {
    this.recipeList.push(recipe);
    console.log('added recipe: ' + recipe.name);
  }


  getRecipes() {
    return this.recipeList;
  }

  removeRecipe(recipe: Recipe) {
    const index = this.recipeList.indexOf(recipe);
    this.recipeList.splice(index, 1);
  }

  updateRecipe(recipe: Recipe, updatedRecipe: Recipe) {
    const index = this.recipeList.indexOf(recipe);
    this.recipeList[index] = updatedRecipe;
  }
}
