import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaltaislandpagePage } from './maltaislandpage.page';

const routes: Routes = [
  {
    path: '',
    component: MaltaislandpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaltaislandpagePageRoutingModule {}
