import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coupon04cartconfirmPage } from './coupon04cartconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: Coupon04cartconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coupon04cartconfirmPageRoutingModule {}
