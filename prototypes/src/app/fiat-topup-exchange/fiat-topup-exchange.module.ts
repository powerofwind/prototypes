import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupExchangePageRoutingModule } from './fiat-topup-exchange-routing.module';

import { FiatTopupExchangePage } from './fiat-topup-exchange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupExchangePageRoutingModule
  ],
  declarations: [FiatTopupExchangePage]
})
export class FiatTopupExchangePageModule {}
