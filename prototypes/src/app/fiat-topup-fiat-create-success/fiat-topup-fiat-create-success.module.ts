import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupFiatCreateSuccessPageRoutingModule } from './fiat-topup-fiat-create-success-routing.module';

import { FiatTopupFiatCreateSuccessPage } from './fiat-topup-fiat-create-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupFiatCreateSuccessPageRoutingModule
  ],
  declarations: [FiatTopupFiatCreateSuccessPage]
})
export class FiatTopupFiatCreateSuccessPageModule {}
