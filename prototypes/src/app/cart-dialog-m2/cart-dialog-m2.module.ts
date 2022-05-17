import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDialogM2PageRoutingModule } from './cart-dialog-m2-routing.module';

import { CartDialogM2Page } from './cart-dialog-m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartDialogM2PageRoutingModule
  ],
  declarations: [CartDialogM2Page]
})
export class CartDialogM2PageModule {}
