import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawExchangeConfirmPage } from './fiat-withdraw-exchange-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawExchangeConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawExchangeConfirmPageRoutingModule {}
