import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coupon07billdetailPageRoutingModule } from './coupon07billdetail-routing.module';

import { Coupon07billdetailPage } from './coupon07billdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coupon07billdetailPageRoutingModule
  ],
  declarations: [Coupon07billdetailPage]
})
export class Coupon07billdetailPageModule {}
