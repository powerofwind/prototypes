import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupQrPage } from './fiat-topup-qr.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupQrPageRoutingModule {}
