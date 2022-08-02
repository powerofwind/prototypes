import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanPage4Page } from './loan-page4.page';

const routes: Routes = [
  {
    path: '',
    component: LoanPage4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPage4PageRoutingModule {}
