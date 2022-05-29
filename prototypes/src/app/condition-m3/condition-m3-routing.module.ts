import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionM3Page } from './condition-m3.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionM3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionM3PageRoutingModule {}
