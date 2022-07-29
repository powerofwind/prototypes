import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePrototypeHomePage } from './one-prototype-home.page';

const routes: Routes = [
  {
    path: '',
    component: OnePrototypeHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnePrototypeHomePageRoutingModule {}
