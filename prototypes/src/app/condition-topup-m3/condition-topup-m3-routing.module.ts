import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionTopupM3Page } from './condition-topup-m3.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionTopupM3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionTopupM3PageRoutingModule {}
