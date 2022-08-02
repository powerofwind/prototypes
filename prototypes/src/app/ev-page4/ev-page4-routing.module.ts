import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvPage4Page } from './ev-page4.page';

const routes: Routes = [
  {
    path: '',
    component: EvPage4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvPage4PageRoutingModule {}
