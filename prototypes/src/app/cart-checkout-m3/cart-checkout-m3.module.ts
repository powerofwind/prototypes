import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartCheckoutM3PageRoutingModule } from './cart-checkout-m3-routing.module';

import { CartCheckoutM3Page } from './cart-checkout-m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartCheckoutM3PageRoutingModule
  ],
  declarations: [CartCheckoutM3Page]
})
export class CartCheckoutM3PageModule {}
