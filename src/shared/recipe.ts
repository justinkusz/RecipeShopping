import { Ingredient } from './ingredient';

export class Recipe {

  constructor(public name: string, public description: string, public ingredients: Ingredient[], public instructions: string) {}

}
