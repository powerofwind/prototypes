import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentM2Page } from './consent-m2.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentM2PageRoutingModule {}
