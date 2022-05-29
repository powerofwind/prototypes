import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopupListM4Page } from './topup-list-m4.page';

const routes: Routes = [
  {
    path: '',
    component: TopupListM4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopupListM4PageRoutingModule {}
