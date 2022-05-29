import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartCheckoutM4Page } from './cart-checkout-m4.page';

const routes: Routes = [
  {
    path: '',
    component: CartCheckoutM4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartCheckoutM4PageRoutingModule {}
