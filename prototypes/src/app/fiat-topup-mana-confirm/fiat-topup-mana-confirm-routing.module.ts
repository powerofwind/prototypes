import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupManaConfirmPage } from './fiat-topup-mana-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupManaConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupManaConfirmPageRoutingModule {}
