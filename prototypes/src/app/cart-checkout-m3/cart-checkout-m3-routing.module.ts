import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartCheckoutM3Page } from './cart-checkout-m3.page';

const routes: Routes = [
  {
    path: '',
    component: CartCheckoutM3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartCheckoutM3PageRoutingModule {}
