import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDialogM4Page } from './cart-dialog-m4.page';

const routes: Routes = [
  {
    path: '',
    component: CartDialogM4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartDialogM4PageRoutingModule {}
