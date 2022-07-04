import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawManaPage } from './fiat-withdraw-mana.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawManaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawManaPageRoutingModule {}
