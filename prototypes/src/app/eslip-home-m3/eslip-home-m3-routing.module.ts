import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipHomeM3Page } from './eslip-home-m3.page';

const routes: Routes = [
  {
    path: '',
    component: EslipHomeM3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipHomeM3PageRoutingModule {}
