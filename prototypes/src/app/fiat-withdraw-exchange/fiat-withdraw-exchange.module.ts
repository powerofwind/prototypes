import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawExchangePageRoutingModule } from './fiat-withdraw-exchange-routing.module';

import { FiatWithdrawExchangePage } from './fiat-withdraw-exchange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawExchangePageRoutingModule
  ],
  declarations: [FiatWithdrawExchangePage]
})
export class FiatWithdrawExchangePageModule {}
