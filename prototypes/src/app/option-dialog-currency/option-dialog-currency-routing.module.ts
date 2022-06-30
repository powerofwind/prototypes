import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionDialogCurrencyPage } from './option-dialog-currency.page';

const routes: Routes = [
  {
    path: '',
    component: OptionDialogCurrencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionDialogCurrencyPageRoutingModule {}
