import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupManaCreatePage } from './fiat-topup-mana-create.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupManaCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupManaCreatePageRoutingModule {}
