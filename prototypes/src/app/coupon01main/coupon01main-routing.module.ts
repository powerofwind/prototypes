import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coupon01mainPage } from './coupon01main.page';

const routes: Routes = [
  {
    path: '',
    component: Coupon01mainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coupon01mainPageRoutingModule {}
