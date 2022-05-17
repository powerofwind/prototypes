import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipDetailPage } from './eslip-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EslipDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipDetailPageRoutingModule {}
