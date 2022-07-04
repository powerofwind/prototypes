import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupExchangeConfirmPage } from './fiat-topup-exchange-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupExchangeConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupExchangeConfirmPageRoutingModule {}
