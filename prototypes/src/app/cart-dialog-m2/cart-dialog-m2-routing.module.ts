import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDialogM2Page } from './cart-dialog-m2.page';

const routes: Routes = [
  {
    path: '',
    component: CartDialogM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartDialogM2PageRoutingModule {}
