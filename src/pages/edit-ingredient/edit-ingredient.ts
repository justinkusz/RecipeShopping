import { ShoppingListService } from './../../services/shopping-list.service';
import { Ingredient } from './../../shared/ingredient';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-edit-ingredient',
  templateUrl: 'edit-ingredient.html',
})
export class EditIngredientPage {

  ingredient: Ingredient;
  units: string[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private shoppingListService: ShoppingListService,
    private viewCtrl: ViewController) {
    this.ingredient = this.navParams.data;
    this.units = this.shoppingListService.getUnits();
  }

  dismiss(ingredient: Ingredient = undefined) {
    this.viewCtrl.dismiss(ingredient);
  }

}
