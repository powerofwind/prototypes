import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawFiatCreateSuccessPageRoutingModule } from './fiat-withdraw-fiat-create-success-routing.module';

import { FiatWithdrawFiatCreateSuccessPage } from './fiat-withdraw-fiat-create-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawFiatCreateSuccessPageRoutingModule
  ],
  declarations: [FiatWithdrawFiatCreateSuccessPage]
})
export class FiatWithdrawFiatCreateSuccessPageModule {}
