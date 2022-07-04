import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupQrCreateSuccessPage } from './fiat-topup-qr-create-success.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupQrCreateSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupQrCreateSuccessPageRoutingModule {}
