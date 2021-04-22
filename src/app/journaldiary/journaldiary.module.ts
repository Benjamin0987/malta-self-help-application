import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournaldiaryPageRoutingModule } from './journaldiary-routing.module';

import { JournaldiaryPage } from './journaldiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournaldiaryPageRoutingModule
  ],
  declarations: [JournaldiaryPage]
})
export class JournaldiaryPageModule {}
