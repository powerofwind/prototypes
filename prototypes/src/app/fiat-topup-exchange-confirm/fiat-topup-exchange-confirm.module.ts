import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupExchangeConfirmPageRoutingModule } from './fiat-topup-exchange-confirm-routing.module';

import { FiatTopupExchangeConfirmPage } from './fiat-topup-exchange-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupExchangeConfirmPageRoutingModule
  ],
  declarations: [FiatTopupExchangeConfirmPage]
})
export class FiatTopupExchangeConfirmPageModule {}
