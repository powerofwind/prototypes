import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanfundPage5Page } from './loanfund-page5.page';

const routes: Routes = [
  {
    path: '',
    component: LoanfundPage5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanfundPage5PageRoutingModule {}
