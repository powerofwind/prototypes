import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionM2PageRoutingModule } from './condition-m2-routing.module';

import { ConditionM2Page } from './condition-m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionM2PageRoutingModule
  ],
  declarations: [ConditionM2Page]
})
export class ConditionM2PageModule {}
