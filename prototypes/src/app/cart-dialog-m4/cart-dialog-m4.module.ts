import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDialogM4PageRoutingModule } from './cart-dialog-m4-routing.module';

import { CartDialogM4Page } from './cart-dialog-m4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartDialogM4PageRoutingModule
  ],
  declarations: [CartDialogM4Page]
})
export class CartDialogM4PageModule {}
