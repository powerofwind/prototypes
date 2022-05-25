import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionDialogBindingPage } from './option-dialog-binding.page';

const routes: Routes = [
  {
    path: '',
    component: OptionDialogBindingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionDialogBindingPageRoutingModule {}
