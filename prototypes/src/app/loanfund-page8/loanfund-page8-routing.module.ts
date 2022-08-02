import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanfundPage8Page } from './loanfund-page8.page';

const routes: Routes = [
  {
    path: '',
    component: LoanfundPage8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanfundPage8PageRoutingModule {}
