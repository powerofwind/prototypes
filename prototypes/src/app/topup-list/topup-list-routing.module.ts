import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopupListPage } from './topup-list.page';

const routes: Routes = [
  {
    path: '',
    component: TopupListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopupListPageRoutingModule {}
