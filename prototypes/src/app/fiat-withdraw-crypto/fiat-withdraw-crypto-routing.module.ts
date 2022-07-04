import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawCryptoPage } from './fiat-withdraw-crypto.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawCryptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawCryptoPageRoutingModule {}
