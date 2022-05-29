import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartCheckoutM4PageRoutingModule } from './cart-checkout-m4-routing.module';

import { CartCheckoutM4Page } from './cart-checkout-m4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartCheckoutM4PageRoutingModule
  ],
  declarations: [CartCheckoutM4Page]
})
export class CartCheckoutM4PageModule {}
