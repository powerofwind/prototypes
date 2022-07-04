import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatWithdrawFiatPage } from './fiat-withdraw-fiat.page';

const routes: Routes = [
  {
    path: '',
    component: FiatWithdrawFiatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatWithdrawFiatPageRoutingModule {}
