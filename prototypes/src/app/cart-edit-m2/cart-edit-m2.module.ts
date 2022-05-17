import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartEditM2PageRoutingModule } from './cart-edit-m2-routing.module';

import { CartEditM2Page } from './cart-edit-m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartEditM2PageRoutingModule
  ],
  declarations: [CartEditM2Page]
})
export class CartEditM2PageModule {}
