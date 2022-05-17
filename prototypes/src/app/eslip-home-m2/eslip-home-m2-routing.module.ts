import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipHomeM2Page } from './eslip-home-m2.page';

const routes: Routes = [
  {
    path: '',
    component: EslipHomeM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipHomeM2PageRoutingModule {}
