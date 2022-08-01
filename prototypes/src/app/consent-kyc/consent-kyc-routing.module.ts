import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentKycPage } from './consent-kyc.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentKycPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentKycPageRoutingModule {}
