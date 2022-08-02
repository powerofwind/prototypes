import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coupon05topupPage } from './coupon05topup.page';

const routes: Routes = [
  {
    path: '',
    component: Coupon05topupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coupon05topupPageRoutingModule {}
