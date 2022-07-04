import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupQrCreateSuccessPageRoutingModule } from './fiat-topup-qr-create-success-routing.module';

import { FiatTopupQrCreateSuccessPage } from './fiat-topup-qr-create-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupQrCreateSuccessPageRoutingModule
  ],
  declarations: [FiatTopupQrCreateSuccessPage]
})
export class FiatTopupQrCreateSuccessPageModule {}
