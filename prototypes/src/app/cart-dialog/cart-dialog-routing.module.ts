import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDialogPage } from './cart-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: CartDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartDialogPageRoutingModule {}
