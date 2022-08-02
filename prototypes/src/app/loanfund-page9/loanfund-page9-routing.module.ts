import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanfundPage9Page } from './loanfund-page9.page';

const routes: Routes = [
  {
    path: '',
    component: LoanfundPage9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanfundPage9PageRoutingModule {}
