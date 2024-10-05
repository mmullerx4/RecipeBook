import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipeBook',
  templateUrl: './recipeBook.component.html',
  styleUrls: ['./recipeBook.component.css']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {

  }

  ngOnInit() {

  }
}
