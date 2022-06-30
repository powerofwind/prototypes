import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawPage } from './fiat-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawPageRoutingModule {}
