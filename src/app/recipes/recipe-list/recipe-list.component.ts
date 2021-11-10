import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  @Output() recipeSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple a test', 'https://www.simplyrecipes.com/thmb/' +
      'IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__' +
      'aboutcom__coeus__resources__content_migration__simply_recipes__' +
      'uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg', [new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)]),
    new Recipe('A test recipe', 'This is simple a test', 'https://www.simplyrecipes.com/thmb/' +
      'IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__' +
      'aboutcom__coeus__resources__content_migration__simply_recipes__' +
      'uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg', [new Ingredient('Apples', 10),
      new Ingredient('Tomatoes', 4),]),
  ];

  onItemSelected(recipe: Recipe) {
    console.log(recipe)
    this.recipeSelected.emit(recipe)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
