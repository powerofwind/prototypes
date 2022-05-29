import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipDetailM4PageRoutingModule } from './eslip-detail-m4-routing.module';

import { EslipDetailM4Page } from './eslip-detail-m4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipDetailM4PageRoutingModule
  ],
  declarations: [EslipDetailM4Page]
})
export class EslipDetailM4PageModule {}
