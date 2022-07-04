import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawFiatCreatePage } from './fiat-withdraw-fiat-create.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawFiatCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawFiatCreatePageRoutingModule {}
