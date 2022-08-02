import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanPage2Page } from './loan-page2.page';

const routes: Routes = [
  {
    path: '',
    component: LoanPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPage2PageRoutingModule {}
