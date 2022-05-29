import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopupConfirmM4Page } from './topup-confirm-m4.page';

const routes: Routes = [
  {
    path: '',
    component: TopupConfirmM4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopupConfirmM4PageRoutingModule {}
