import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartEditM3PageRoutingModule } from './cart-edit-m3-routing.module';

import { CartEditM3Page } from './cart-edit-m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartEditM3PageRoutingModule
  ],
  declarations: [CartEditM3Page]
})
export class CartEditM3PageModule {}
