import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatTopupManaPage } from './fiat-topup-mana.page';

const routes: Routes = [
  {
    path: '',
    component: FiatTopupManaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatTopupManaPageRoutingModule {}
