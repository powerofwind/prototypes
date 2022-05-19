import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentRegisterTemplatePage } from './consent-register-template.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentRegisterTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentRegisterTemplatePageRoutingModule {}
