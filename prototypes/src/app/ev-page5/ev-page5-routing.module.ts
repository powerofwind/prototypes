import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvPage5Page } from './ev-page5.page';

const routes: Routes = [
  {
    path: '',
    component: EvPage5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvPage5PageRoutingModule {}
