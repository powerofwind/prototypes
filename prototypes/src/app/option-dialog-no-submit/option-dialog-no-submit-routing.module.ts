import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionDialogNoSubmitPage } from './option-dialog-no-submit.page';

const routes: Routes = [
  {
    path: '',
    component: OptionDialogNoSubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionDialogNoSubmitPageRoutingModule {}
