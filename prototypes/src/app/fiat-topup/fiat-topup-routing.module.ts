import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupPage } from './fiat-topup.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupPageRoutingModule {}
