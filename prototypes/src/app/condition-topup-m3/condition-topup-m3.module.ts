import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionTopupM3PageRoutingModule } from './condition-topup-m3-routing.module';

import { ConditionTopupM3Page } from './condition-topup-m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionTopupM3PageRoutingModule
  ],
  declarations: [ConditionTopupM3Page]
})
export class ConditionTopupM3PageModule {}
