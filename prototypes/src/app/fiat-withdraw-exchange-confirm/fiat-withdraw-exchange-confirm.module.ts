import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawExchangeConfirmPageRoutingModule } from './fiat-withdraw-exchange-confirm-routing.module';

import { FiatWithdrawExchangeConfirmPage } from './fiat-withdraw-exchange-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawExchangeConfirmPageRoutingModule
  ],
  declarations: [FiatWithdrawExchangeConfirmPage]
})
export class FiatWithdrawExchangeConfirmPageModule {}
