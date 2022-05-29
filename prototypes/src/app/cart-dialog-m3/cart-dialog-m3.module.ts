import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDialogM3PageRoutingModule } from './cart-dialog-m3-routing.module';

import { CartDialogM3Page } from './cart-dialog-m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartDialogM3PageRoutingModule
  ],
  declarations: [CartDialogM3Page]
})
export class CartDialogM3PageModule {}
