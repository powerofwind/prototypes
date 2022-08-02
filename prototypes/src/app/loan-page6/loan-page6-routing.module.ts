import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanPage6Page } from './loan-page6.page';

const routes: Routes = [
  {
    path: '',
    component: LoanPage6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanPage6PageRoutingModule {}
