import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coupon07billdetailPage } from './coupon07billdetail.page';

const routes: Routes = [
  {
    path: '',
    component: Coupon07billdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coupon07billdetailPageRoutingModule {}
