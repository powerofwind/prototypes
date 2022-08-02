import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coupon08receivedPage } from './coupon08received.page';

const routes: Routes = [
  {
    path: '',
    component: Coupon08receivedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coupon08receivedPageRoutingModule {}
