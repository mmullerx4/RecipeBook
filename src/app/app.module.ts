import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipeBook/recipe-item/recipe-item.component';
import { recipeDetailComponent } from './header/recipeBook/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './header/recipeBook/recipeBook.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    recipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
