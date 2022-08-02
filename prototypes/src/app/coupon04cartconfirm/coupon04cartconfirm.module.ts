import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coupon04cartconfirmPageRoutingModule } from './coupon04cartconfirm-routing.module';

import { Coupon04cartconfirmPage } from './coupon04cartconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coupon04cartconfirmPageRoutingModule
  ],
  declarations: [Coupon04cartconfirmPage]
})
export class Coupon04cartconfirmPageModule {}
