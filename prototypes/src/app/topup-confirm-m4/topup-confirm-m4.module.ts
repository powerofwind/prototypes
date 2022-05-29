import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopupConfirmM4PageRoutingModule } from './topup-confirm-m4-routing.module';

import { TopupConfirmM4Page } from './topup-confirm-m4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopupConfirmM4PageRoutingModule
  ],
  declarations: [TopupConfirmM4Page]
})
export class TopupConfirmM4PageModule {}
