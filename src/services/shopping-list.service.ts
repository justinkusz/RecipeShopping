import { Ingredient } from './../shared/ingredient';

export class ShoppingListService {

  shoppingList: Ingredient[] = [];
  shoppingCart: Ingredient[] = [];
  units = ['oz', 'g', 'lb', 'cup', 'gallon', 'pint'];


  addToShoppingList(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
  }

  clearShoppingCart() {
    this.shoppingCart = [];
  }

  clearShoppingList() {
    this.shoppingList = [];
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  getShoppingList() {
    return this.shoppingList;
  }

  getUnits() {
    return this.units;
  }

  removeFromCart(ingredient: Ingredient) {
    const index = this.shoppingCart.indexOf(ingredient);
    this.shoppingCart.splice(index, 1);
  }

  removeFromShoppingList(ingredient: Ingredient) {
    const index = this.shoppingList.indexOf(ingredient);
    this.shoppingList.splice(index, 1);
  }

  shoppingCartIsEmpty() {
    return (this.shoppingCart.length < 1);
  }

  shoppingListIsEmpty() {
    return (this.shoppingList.length < 1);
  }

  toggleInShoppingCart(ingredient: Ingredient, moveToShoppingCart: boolean) {
    if (moveToShoppingCart) {
      this.removeFromShoppingList(ingredient);
      this.shoppingCart.push(ingredient);
    } else {
      this.removeFromCart(ingredient);
      this.addToShoppingList(ingredient);
    }
  }

}
