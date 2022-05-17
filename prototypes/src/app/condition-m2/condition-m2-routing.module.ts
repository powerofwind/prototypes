import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionM2Page } from './condition-m2.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionM2PageRoutingModule {}
