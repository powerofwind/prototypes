import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupCryptoPageRoutingModule } from './fiat-topup-crypto-routing.module';

import { FiatTopupCryptoPage } from './fiat-topup-crypto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupCryptoPageRoutingModule
  ],
  declarations: [FiatTopupCryptoPage]
})
export class FiatTopupCryptoPageModule {}
