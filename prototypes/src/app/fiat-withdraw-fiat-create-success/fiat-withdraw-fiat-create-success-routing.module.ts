import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawFiatCreateSuccessPage } from './fiat-withdraw-fiat-create-success.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawFiatCreateSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawFiatCreateSuccessPageRoutingModule {}
