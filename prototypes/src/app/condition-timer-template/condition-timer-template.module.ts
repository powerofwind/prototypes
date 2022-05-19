import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionTimerTemplatePageRoutingModule } from './condition-timer-template-routing.module';

import { ConditionTimerTemplatePage } from './condition-timer-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionTimerTemplatePageRoutingModule
  ],
  declarations: [ConditionTimerTemplatePage]
})
export class ConditionTimerTemplatePageModule {}
