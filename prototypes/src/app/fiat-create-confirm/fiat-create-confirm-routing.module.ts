import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatCreateConfirmPage } from './fiat-create-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: FiatCreateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatCreateConfirmPageRoutingModule {}
