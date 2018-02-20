import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { Recipe } from './../../shared/recipe';
import { Component } from '@angular/core';
import { NavParams, ViewController, ModalController } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'page-recipe-detail-popover',
  templateUrl: 'recipe-detail-popover.html',
})
export class RecipeDetailPopoverPage {

  recipe: Recipe;
  editRecipePage: EditRecipePage;

  constructor(private navParams: NavParams, private shoppingListService: ShoppingListService, private viewCtrl: ViewController,
    private modalCtrl: ModalController) {
    this.recipe = this.navParams.data;
  }

  addToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addToShoppingList(ingredient);
    }
    this.viewCtrl.dismiss();
  }

  editRecipe() {
    this.viewCtrl.dismiss(true);
  }

}
