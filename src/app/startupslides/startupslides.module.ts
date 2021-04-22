import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartupslidesPageRoutingModule } from './startupslides-routing.module';

import { StartupslidesPage } from './startupslides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartupslidesPageRoutingModule
  ],
  declarations: [StartupslidesPage]
})
export class StartupslidesPageModule {}
