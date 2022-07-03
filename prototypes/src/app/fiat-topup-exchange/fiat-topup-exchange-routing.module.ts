import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupExchangePage } from './fiat-topup-exchange.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupExchangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupExchangePageRoutingModule {}
