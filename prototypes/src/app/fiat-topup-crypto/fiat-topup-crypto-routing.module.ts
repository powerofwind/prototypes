import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupCryptoPage } from './fiat-topup-crypto.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupCryptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupCryptoPageRoutingModule {}
