import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionTopupPageRoutingModule } from './condition-topup-routing.module';

import { ConditionTopupPage } from './condition-topup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionTopupPageRoutingModule
  ],
  declarations: [ConditionTopupPage]
})
export class ConditionTopupPageModule {}
