import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawManaConfirmPage } from './fiat-withdraw-mana-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawManaConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawManaConfirmPageRoutingModule {}
