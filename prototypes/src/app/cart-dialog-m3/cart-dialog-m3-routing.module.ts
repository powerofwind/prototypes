import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDialogM3Page } from './cart-dialog-m3.page';

const routes: Routes = [
  {
    path: '',
    component: CartDialogM3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartDialogM3PageRoutingModule {}
