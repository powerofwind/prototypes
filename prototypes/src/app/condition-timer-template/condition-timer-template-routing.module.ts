import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionTimerTemplatePage } from './condition-timer-template.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionTimerTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionTimerTemplatePageRoutingModule {}
