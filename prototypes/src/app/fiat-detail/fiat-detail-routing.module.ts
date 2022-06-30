import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatDetailPage } from './fiat-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FiatDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatDetailPageRoutingModule {}
