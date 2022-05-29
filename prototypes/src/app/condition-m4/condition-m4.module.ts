import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionM4PageRoutingModule } from './condition-m4-routing.module';

import { ConditionM4Page } from './condition-m4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionM4PageRoutingModule
  ],
  declarations: [ConditionM4Page]
})
export class ConditionM4PageModule {}
