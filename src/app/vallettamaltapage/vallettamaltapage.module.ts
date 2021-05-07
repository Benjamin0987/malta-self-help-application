import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VallettamaltapagePageRoutingModule } from './vallettamaltapage-routing.module';

import { VallettamaltapagePage } from './vallettamaltapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VallettamaltapagePageRoutingModule
  ],
  declarations: [VallettamaltapagePage]
})
export class VallettamaltapagePageModule {}
