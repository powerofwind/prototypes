import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipDetailM2Page } from './eslip-detail-m2.page';

const routes: Routes = [
  {
    path: '',
    component: EslipDetailM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipDetailM2PageRoutingModule {}
