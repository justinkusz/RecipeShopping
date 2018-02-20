import { Ingredient } from './../../shared/ingredient';
import { Recipe } from './../../shared/recipe';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage {

  recipe: Recipe;
  newIngredient: Ingredient;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
    const recipe: Recipe = this.navParams.get('recipe');
    this.recipe = (recipe) ? recipe : new Recipe("", "", new Array<Ingredient>(), "");
    this.newIngredient = new Ingredient("", null, "");
  }

  dismiss(recipe: Recipe = undefined) {
    console.log("Dismissing. Data: " + JSON.stringify(recipe));
    this.viewCtrl.dismiss(recipe);
  }

  addIngredient(){
    this.recipe.ingredients.push(this.newIngredient);
    this.newIngredient = new Ingredient("", null, "");
  }

  removeIngredient(ingredient: Ingredient) {
    const index = this.recipe.ingredients.indexOf(ingredient);
    this.recipe.ingredients.splice(index, 1);
  }

}
