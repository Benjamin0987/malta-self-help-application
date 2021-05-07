import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GozoislandpagePage } from './gozoislandpage.page';

const routes: Routes = [
  {
    path: '',
    component: GozoislandpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GozoislandpagePageRoutingModule {}
