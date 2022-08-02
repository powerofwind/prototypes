import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvPage2Page } from './ev-page2.page';

const routes: Routes = [
  {
    path: '',
    component: EvPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvPage2PageRoutingModule {}
