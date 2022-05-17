import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipDetailPageRoutingModule } from './eslip-detail-routing.module';

import { EslipDetailPage } from './eslip-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipDetailPageRoutingModule
  ],
  declarations: [EslipDetailPage]
})
export class EslipDetailPageModule {}
