import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawFiatPageRoutingModule } from './fiat-withdraw-fiat-routing.module';

import { FiatWithdrawFiatPage } from './fiat-withdraw-fiat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawFiatPageRoutingModule
  ],
  declarations: [FiatWithdrawFiatPage]
})
export class FiatWithdrawFiatPageModule {}
