import { RecipeDetailPopoverPage } from './../pages/recipe-detail-popover/recipe-detail-popover';
import { RecipeDetailPage } from './../pages/recipe-detail/recipe-detail';
import { EditRecipePage } from './../pages/edit-recipe/edit-recipe';
import { RecipeService } from './../services/recipe.service';
import { EditIngredientPage } from './../pages/edit-ingredient/edit-ingredient';
import { RecipesPage } from './../pages/recipes/recipes';
import { ShoppingPage } from './../pages/shopping/shopping';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ShoppingListService } from '../services/shopping-list.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ShoppingPage,
    RecipesPage,
    EditIngredientPage,
    EditRecipePage,
    RecipeDetailPage,
    RecipeDetailPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ShoppingPage,
    RecipesPage,
    EditIngredientPage,
    EditRecipePage,
    RecipeDetailPage,
    RecipeDetailPopoverPage
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
