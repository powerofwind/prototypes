import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionM3PageRoutingModule } from './condition-m3-routing.module';

import { ConditionM3Page } from './condition-m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionM3PageRoutingModule
  ],
  declarations: [ConditionM3Page]
})
export class ConditionM3PageModule {}
