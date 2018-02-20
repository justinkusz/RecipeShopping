import { RecipesPage } from './../recipes/recipes';
import { Component } from '@angular/core';
import { ShoppingPage } from '../shopping/shopping';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  recipesPage = RecipesPage;
  shoppingPage = ShoppingPage;

  constructor() {

  }
}
