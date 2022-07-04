import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawFiatCreatePageRoutingModule } from './fiat-withdraw-fiat-create-routing.module';

import { FiatWithdrawFiatCreatePage } from './fiat-withdraw-fiat-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawFiatCreatePageRoutingModule
  ],
  declarations: [FiatWithdrawFiatCreatePage]
})
export class FiatWithdrawFiatCreatePageModule {}
