import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDialogPageRoutingModule } from './cart-dialog-routing.module';

import { CartDialogPage } from './cart-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartDialogPageRoutingModule
  ],
  declarations: [CartDialogPage]
})
export class CartDialogPageModule {}
