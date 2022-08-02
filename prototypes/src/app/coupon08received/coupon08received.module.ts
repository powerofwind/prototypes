import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coupon08receivedPageRoutingModule } from './coupon08received-routing.module';

import { Coupon08receivedPage } from './coupon08received.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coupon08receivedPageRoutingModule
  ],
  declarations: [Coupon08receivedPage]
})
export class Coupon08receivedPageModule {}
