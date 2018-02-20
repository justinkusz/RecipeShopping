import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeDetailPopoverPage } from './recipe-detail-popover';

@NgModule({
  declarations: [
    RecipeDetailPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeDetailPopoverPage),
  ],
})
export class RecipeDetailPopoverPageModule {}
