import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanfundPage1Page } from './loanfund-page1.page';

const routes: Routes = [
  {
    path: '',
    component: LoanfundPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanfundPage1PageRoutingModule {}
