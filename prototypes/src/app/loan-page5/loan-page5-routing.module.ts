import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanPage5Page } from './loan-page5.page';

const routes: Routes = [
  {
    path: '',
    component: LoanPage5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPage5PageRoutingModule {}
