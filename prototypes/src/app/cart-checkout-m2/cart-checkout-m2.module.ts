import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartCheckoutM2PageRoutingModule } from './cart-checkout-m2-routing.module';

import { CartCheckoutM2Page } from './cart-checkout-m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartCheckoutM2PageRoutingModule
  ],
  declarations: [CartCheckoutM2Page]
})
export class CartCheckoutM2PageModule {}
