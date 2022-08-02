import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coupon06topupdetailPage } from './coupon06topupdetail.page';

const routes: Routes = [
  {
    path: '',
    component: Coupon06topupdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coupon06topupdetailPageRoutingModule {}
