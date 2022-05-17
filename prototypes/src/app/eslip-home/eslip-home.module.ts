import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipHomePageRoutingModule } from './eslip-home-routing.module';

import { EslipHomePage } from './eslip-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipHomePageRoutingModule
  ],
  declarations: [EslipHomePage]
})
export class EslipHomePageModule {}
