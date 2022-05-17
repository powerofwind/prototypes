import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipHomeM2PageRoutingModule } from './eslip-home-m2-routing.module';

import { EslipHomeM2Page } from './eslip-home-m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipHomeM2PageRoutingModule
  ],
  declarations: [EslipHomeM2Page]
})
export class EslipHomeM2PageModule {}
