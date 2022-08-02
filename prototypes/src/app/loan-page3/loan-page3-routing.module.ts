import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanPage3Page } from './loan-page3.page';

const routes: Routes = [
  {
    path: '',
    component: LoanPage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPage3PageRoutingModule {}
