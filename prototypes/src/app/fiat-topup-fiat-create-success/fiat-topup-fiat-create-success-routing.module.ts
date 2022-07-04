import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupFiatCreateSuccessPage } from './fiat-topup-fiat-create-success.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupFiatCreateSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupFiatCreateSuccessPageRoutingModule {}
