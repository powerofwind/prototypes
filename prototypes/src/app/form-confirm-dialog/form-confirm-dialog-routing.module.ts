import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormConfirmDialogPage } from './form-confirm-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: FormConfirmDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormConfirmDialogPageRoutingModule {}
