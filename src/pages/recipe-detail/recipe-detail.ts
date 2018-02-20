import { RecipeDetailPopoverPage } from './../recipe-detail-popover/recipe-detail-popover';
import { RecipeService } from './../../services/recipe.service';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { NavParams, Modal, ModalController, PopoverController, Button } from 'ionic-angular';
import { Recipe } from './../../shared/recipe';
import { Component } from '@angular/core';

@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})
export class RecipeDetailPage {

  recipe: Recipe;
  editRecipePage = EditRecipePage;
  recipeDetailPopover = RecipeDetailPopoverPage;

  constructor(private navParams: NavParams,
    private modalCtrl: ModalController,
    private recipeService : RecipeService,
    private popoverCtrl: PopoverController) {
    this.recipe = this.navParams.data;
  }

  editRecipe() {
    const modal = this.modalCtrl.create(this.editRecipePage, {recipe: this.recipe});
    modal.onDidDismiss(
      (editedRecipe: Recipe) => {
        if (editedRecipe) {
          this.recipe = editedRecipe;
          this.recipeService.updateRecipe(this.recipe, editedRecipe);
        }
      }
    );
    modal.present();
  }

  showPopover(button: Button) {
    const popover = this.popoverCtrl.create(this.recipeDetailPopover, this.recipe);
    popover.onDidDismiss(
      (editRecipe: boolean) => {
        if (editRecipe) {
          this.editRecipe();
        }
      }
    );
    popover.present({ev: button});
  }
}
