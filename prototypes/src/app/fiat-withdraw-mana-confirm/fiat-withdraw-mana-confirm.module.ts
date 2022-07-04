import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawManaConfirmPageRoutingModule } from './fiat-withdraw-mana-confirm-routing.module';

import { FiatWithdrawManaConfirmPage } from './fiat-withdraw-mana-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawManaConfirmPageRoutingModule
  ],
  declarations: [FiatWithdrawManaConfirmPage]
})
export class FiatWithdrawManaConfirmPageModule {}
