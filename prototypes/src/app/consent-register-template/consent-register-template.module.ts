import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentRegisterTemplatePageRoutingModule } from './consent-register-template-routing.module';

import { ConsentRegisterTemplatePage } from './consent-register-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsentRegisterTemplatePageRoutingModule
  ],
  declarations: [ConsentRegisterTemplatePage]
})
export class ConsentRegisterTemplatePageModule {}
