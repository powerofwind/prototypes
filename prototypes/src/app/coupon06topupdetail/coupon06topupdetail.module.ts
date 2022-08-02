import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coupon06topupdetailPageRoutingModule } from './coupon06topupdetail-routing.module';

import { Coupon06topupdetailPage } from './coupon06topupdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coupon06topupdetailPageRoutingModule
  ],
  declarations: [Coupon06topupdetailPage]
})
export class Coupon06topupdetailPageModule {}
