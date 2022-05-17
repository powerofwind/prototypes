import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemeberPage } from './memeber.page';

const routes: Routes = [
  {
    path: '',
    component: MemeberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemeberPageRoutingModule {}
