import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdinamaltapagePageRoutingModule } from './mdinamaltapage-routing.module';

import { MdinamaltapagePage } from './mdinamaltapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdinamaltapagePageRoutingModule
  ],
  declarations: [MdinamaltapagePage]
})
export class MdinamaltapagePageModule {}
