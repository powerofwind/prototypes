import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coupon01mainPageRoutingModule } from './coupon01main-routing.module';

import { Coupon01mainPage } from './coupon01main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coupon01mainPageRoutingModule
  ],
  declarations: [Coupon01mainPage]
})
export class Coupon01mainPageModule {}
