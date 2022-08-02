import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvPage3Page } from './ev-page3.page';

const routes: Routes = [
  {
    path: '',
    component: EvPage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvPage3PageRoutingModule {}
