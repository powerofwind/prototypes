import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupFiatPageRoutingModule } from './fiat-topup-fiat-routing.module';

import { FiatTopupFiatPage } from './fiat-topup-fiat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupFiatPageRoutingModule
  ],
  declarations: [FiatTopupFiatPage]
})
export class FiatTopupFiatPageModule {}
