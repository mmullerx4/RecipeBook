import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipeBook',
  templateUrl: './recipeBook.component.html',
  styleUrls: ['./recipeBook.component.css']
})
export class RecipeBookComponent {
  selectedRecipe: Recipe;

  constructor() {

  }

  ngOnInit() {

  }
}
