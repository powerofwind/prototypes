import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiatMainPage } from './fiat-main.page';

const routes: Routes = [
  {
    path: '',
    component: FiatMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiatMainPageRoutingModule {}
