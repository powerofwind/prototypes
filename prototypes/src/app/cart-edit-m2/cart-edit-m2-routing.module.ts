import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartEditM2Page } from './cart-edit-m2.page';

const routes: Routes = [
  {
    path: '',
    component: CartEditM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartEditM2PageRoutingModule {}
