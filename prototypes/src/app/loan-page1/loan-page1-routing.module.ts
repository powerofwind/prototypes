import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanPage1Page } from './loan-page1.page';

const routes: Routes = [
  {
    path: '',
    component: LoanPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPage1PageRoutingModule {}
