import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopupConfirmPage } from './topup-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: TopupConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopupConfirmPageRoutingModule {}
