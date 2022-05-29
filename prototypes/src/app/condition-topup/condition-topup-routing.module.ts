import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionTopupPage } from './condition-topup.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionTopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionTopupPageRoutingModule {}
