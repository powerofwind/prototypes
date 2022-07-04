import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupFiatCreatePageRoutingModule } from './fiat-topup-fiat-create-routing.module';

import { FiatTopupFiatCreatePage } from './fiat-topup-fiat-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupFiatCreatePageRoutingModule
  ],
  declarations: [FiatTopupFiatCreatePage]
})
export class FiatTopupFiatCreatePageModule {}
