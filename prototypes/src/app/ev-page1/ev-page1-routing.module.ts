import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvPage1Page } from './ev-page1.page';

const routes: Routes = [
  {
    path: '',
    component: EvPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvPage1PageRoutingModule {}
