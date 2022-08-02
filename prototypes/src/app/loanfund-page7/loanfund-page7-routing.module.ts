import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanfundPage7Page } from './loanfund-page7.page';

const routes: Routes = [
  {
    path: '',
    component: LoanfundPage7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanfundPage7PageRoutingModule {}
