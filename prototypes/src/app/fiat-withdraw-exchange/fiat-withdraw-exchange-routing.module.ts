import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawExchangePage } from './fiat-withdraw-exchange.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawExchangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawExchangePageRoutingModule {}
