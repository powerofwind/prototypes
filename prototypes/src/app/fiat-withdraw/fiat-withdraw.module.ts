import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawPageRoutingModule } from './fiat-withdraw-routing.module';

import { FiatWithdrawPage } from './fiat-withdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawPageRoutingModule
  ],
  declarations: [FiatWithdrawPage]
})
export class FiatWithdrawPageModule {}
