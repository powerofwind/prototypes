import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupFiatCreatePage } from './fiat-topup-fiat-create.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupFiatCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupFiatCreatePageRoutingModule {}
