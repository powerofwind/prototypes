import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipHomeM3PageRoutingModule } from './eslip-home-m3-routing.module';

import { EslipHomeM3Page } from './eslip-home-m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipHomeM3PageRoutingModule
  ],
  declarations: [EslipHomeM3Page]
})
export class EslipHomeM3PageModule {}
