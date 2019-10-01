import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../share/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      "A test Recipe",
      "This is test",
      "https://www.simplyrecipes.com/wp-content/uploads/2019/08/summer-chicken-panzanella-Lead3-440x293.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Another test Recipe",
      "This is also test",
      "https://assets3.thrillist.com/v1/image/2797371/size/tl-horizontal_main_2x.jpg",
      [new Ingredient("Meat", 1), new Ingredient("Bread", 2)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  constructor(private slService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();

  addIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
