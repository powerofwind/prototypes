import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupQrPageRoutingModule } from './fiat-topup-qr-routing.module';

import { FiatTopupQrPage } from './fiat-topup-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupQrPageRoutingModule
  ],
  declarations: [FiatTopupQrPage]
})
export class FiatTopupQrPageModule {}
