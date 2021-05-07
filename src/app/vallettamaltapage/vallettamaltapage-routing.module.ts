import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VallettamaltapagePage } from './vallettamaltapage.page';

const routes: Routes = [
  {
    path: '',
    component: VallettamaltapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VallettamaltapagePageRoutingModule {}
