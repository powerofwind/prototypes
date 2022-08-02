import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coupon02registerPage } from './coupon02register.page';

const routes: Routes = [
  {
    path: '',
    component: Coupon02registerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coupon02registerPageRoutingModule {}
