import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupQrConfirmPage } from './fiat-topup-qr-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupQrConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupQrConfirmPageRoutingModule {}
