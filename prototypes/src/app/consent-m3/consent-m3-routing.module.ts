import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentM3Page } from './consent-m3.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentM3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentM3PageRoutingModule {}
