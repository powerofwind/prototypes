import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipDetailM4Page } from './eslip-detail-m4.page';

const routes: Routes = [
  {
    path: '',
    component: EslipDetailM4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipDetailM4PageRoutingModule {}
