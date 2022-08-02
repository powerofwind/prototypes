import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanfundPage2Page } from './loanfund-page2.page';

const routes: Routes = [
  {
    path: '',
    component: LoanfundPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanfundPage2PageRoutingModule {}
