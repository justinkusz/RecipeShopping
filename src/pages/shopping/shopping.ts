import { EditIngredientPage } from './../edit-ingredient/edit-ingredient';
import { ShoppingListService } from './../../services/shopping-list.service';
import { Ingredient } from './../../shared/ingredient';
import { Component } from '@angular/core';
import { Checkbox } from 'ionic-angular/components/checkbox/checkbox';
import { ModalController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html',
})

export class ShoppingPage {

  shoppingList: Ingredient[] = [];
  shoppingCart: Ingredient[] = [];
  ingredientToAdd = "";
  units: string[];
  editIngredientPage = EditIngredientPage;

  constructor(private shoppingListService: ShoppingListService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController) {
    this.shoppingList = this.shoppingListService.getShoppingList();
    this.shoppingCart = this.shoppingListService.getShoppingCart();
    this.units = this.shoppingListService.getUnits();
  }

  addToShoppingList() {
    if (this.ingredientToAdd.trim() == "") {
      const toast = this.toastCtrl.create({
        message: 'Your ingredient needs a name',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return;
    }
    const newIngredient = new Ingredient(this.ingredientToAdd,null,null);
    this.shoppingListService.addToShoppingList(newIngredient);
    this.ingredientToAdd = "";
  }

  incrementIngredientAmount(ingredient: Ingredient, amount: number) {
    ingredient.amount += amount;
  }

  editIngredient(ingredient: Ingredient) {
    const modal = this.modalCtrl.create(this.editIngredientPage, ingredient);
    modal.onDidDismiss(
      (updatedIngredient: Ingredient) => {
        ingredient = updatedIngredient;
      }
    )
    modal.present();
  }

  moveToCart(ingredient: Ingredient) {
    this.shoppingListService.toggleInShoppingCart(ingredient, true);
  }

  removeFromCart(ingredient: Ingredient) {
    this.shoppingListService.removeFromCart(ingredient);
  }

  removeFromShoppingList(ingredient: Ingredient) {
    this.shoppingListService.removeFromShoppingList(ingredient);
  }

  shoppingCartIsEmpty() {
    return this.shoppingListService.shoppingCartIsEmpty();
  }

  shoppingListIsEmpty() {
    return this.shoppingListService.shoppingListIsEmpty();
  }

  toggleInCart(ingredient: Ingredient, check: Checkbox) {
    this.shoppingListService.toggleInShoppingCart(ingredient, check.checked);
  }
}
