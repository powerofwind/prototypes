import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coupon03cartPage } from './coupon03cart.page';

const routes: Routes = [
  {
    path: '',
    component: Coupon03cartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coupon03cartPageRoutingModule {}
