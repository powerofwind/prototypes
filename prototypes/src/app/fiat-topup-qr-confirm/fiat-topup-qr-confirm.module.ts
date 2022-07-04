import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupQrConfirmPageRoutingModule } from './fiat-topup-qr-confirm-routing.module';

import { FiatTopupQrConfirmPage } from './fiat-topup-qr-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupQrConfirmPageRoutingModule
  ],
  declarations: [FiatTopupQrConfirmPage]
})
export class FiatTopupQrConfirmPageModule {}
