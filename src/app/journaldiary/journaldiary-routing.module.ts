import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournaldiaryPage } from './journaldiary.page';

const routes: Routes = [
  {
    path: '',
    component: JournaldiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournaldiaryPageRoutingModule {}
