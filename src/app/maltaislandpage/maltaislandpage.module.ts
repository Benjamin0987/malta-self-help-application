import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaltaislandpagePageRoutingModule } from './maltaislandpage-routing.module';

import { MaltaislandpagePage } from './maltaislandpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaltaislandpagePageRoutingModule
  ],
  declarations: [MaltaislandpagePage]
})
export class MaltaislandpagePageModule {}
