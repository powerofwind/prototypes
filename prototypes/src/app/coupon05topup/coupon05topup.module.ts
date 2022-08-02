import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coupon05topupPageRoutingModule } from './coupon05topup-routing.module';

import { Coupon05topupPage } from './coupon05topup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coupon05topupPageRoutingModule
  ],
  declarations: [Coupon05topupPage]
})
export class Coupon05topupPageModule {}
