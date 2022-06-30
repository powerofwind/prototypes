import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupPageRoutingModule } from './fiat-topup-routing.module';

import { FiatTopupPage } from './fiat-topup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupPageRoutingModule
  ],
  declarations: [FiatTopupPage]
})
export class FiatTopupPageModule {}
