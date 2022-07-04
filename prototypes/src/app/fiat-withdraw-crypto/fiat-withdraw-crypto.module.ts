import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawCryptoPageRoutingModule } from './fiat-withdraw-crypto-routing.module';

import { FiatWithdrawCryptoPage } from './fiat-withdraw-crypto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawCryptoPageRoutingModule
  ],
  declarations: [FiatWithdrawCryptoPage]
})
export class FiatWithdrawCryptoPageModule {}
