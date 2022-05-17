import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartCheckoutM2Page } from './cart-checkout-m2.page';

const routes: Routes = [
  {
    path: '',
    component: CartCheckoutM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartCheckoutM2PageRoutingModule {}
