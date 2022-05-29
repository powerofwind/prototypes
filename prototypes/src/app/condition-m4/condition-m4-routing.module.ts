import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionM4Page } from './condition-m4.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionM4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionM4PageRoutingModule {}
