import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coupon03cartPageRoutingModule } from './coupon03cart-routing.module';

import { Coupon03cartPage } from './coupon03cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coupon03cartPageRoutingModule
  ],
  declarations: [Coupon03cartPage]
})
export class Coupon03cartPageModule {}
