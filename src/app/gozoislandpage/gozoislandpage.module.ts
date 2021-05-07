import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GozoislandpagePageRoutingModule } from './gozoislandpage-routing.module';

import { GozoislandpagePage } from './gozoislandpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GozoislandpagePageRoutingModule
  ],
  declarations: [GozoislandpagePage]
})
export class GozoislandpagePageModule {}
