import { Recipe } from './../../shared/recipe';
import { RecipeService } from './../../services/recipe.service';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { EditRecipePage } from '../edit-recipe/edit-recipe';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  editRecipePage = EditRecipePage;
  recipeList: Recipe[] = [];

  recipeDetailPage = RecipeDetailPage;

  constructor(private recipeService: RecipeService,
    private modalCtrl: ModalController,
    private navCtrl: NavController) {
    this.recipeList = this.recipeService.getRecipes();
  }

  addRecipe() {
    const modal = this.modalCtrl.create(this.editRecipePage);
    modal.onDidDismiss(
      (recipe: Recipe) => {
        if (recipe) {
          this.recipeService.addRecipe(recipe);
          this.recipeList = this.recipeService.getRecipes();
        }
      }
    );
    modal.present();
  }

  showRecipeDetail(recipe: Recipe) {
    this.navCtrl.push(this.recipeDetailPage, recipe);
  }

}
