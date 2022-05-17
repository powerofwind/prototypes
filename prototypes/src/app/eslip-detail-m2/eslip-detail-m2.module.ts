import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipDetailM2PageRoutingModule } from './eslip-detail-m2-routing.module';

import { EslipDetailM2Page } from './eslip-detail-m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipDetailM2PageRoutingModule
  ],
  declarations: [EslipDetailM2Page]
})
export class EslipDetailM2PageModule {}
