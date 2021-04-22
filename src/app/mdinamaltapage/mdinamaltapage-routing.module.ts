import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdinamaltapagePage } from './mdinamaltapage.page';

const routes: Routes = [
  {
    path: '',
    component: MdinamaltapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdinamaltapagePageRoutingModule {}
