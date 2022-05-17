import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipHomePage } from './eslip-home.page';

const routes: Routes = [
  {
    path: '',
    component: EslipHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipHomePageRoutingModule {}
