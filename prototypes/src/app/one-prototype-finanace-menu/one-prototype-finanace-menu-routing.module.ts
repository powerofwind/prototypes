import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePrototypeFinanaceMenuPage } from './one-prototype-finanace-menu.page';

const routes: Routes = [
  {
    path: '',
    component: OnePrototypeFinanaceMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnePrototypeFinanaceMenuPageRoutingModule {}
