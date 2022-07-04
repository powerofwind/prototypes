import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawManaCreatePage } from './fiat-withdraw-mana-create.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawManaCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawManaCreatePageRoutingModule {}
