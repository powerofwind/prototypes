import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanPage7Page } from './loan-page7.page';

const routes: Routes = [
  {
    path: '',
    component: LoanPage7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPage7PageRoutingModule {}
