import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanfundPage3Page } from './loanfund-page3.page';

const routes: Routes = [
  {
    path: '',
    component: LoanfundPage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanfundPage3PageRoutingModule {}
