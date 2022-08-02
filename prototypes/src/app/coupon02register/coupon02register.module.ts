import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coupon02registerPageRoutingModule } from './coupon02register-routing.module';

import { Coupon02registerPage } from './coupon02register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coupon02registerPageRoutingModule
  ],
  declarations: [Coupon02registerPage]
})
export class Coupon02registerPageModule {}
