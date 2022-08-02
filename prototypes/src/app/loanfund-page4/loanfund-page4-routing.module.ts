import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanfundPage4Page } from './loanfund-page4.page';

const routes: Routes = [
  {
    path: '',
    component: LoanfundPage4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanfundPage4PageRoutingModule {}
