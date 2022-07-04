import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupManaConfirmPageRoutingModule } from './fiat-topup-mana-confirm-routing.module';

import { FiatTopupManaConfirmPage } from './fiat-topup-mana-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupManaConfirmPageRoutingModule
  ],
  declarations: [FiatTopupManaConfirmPage]
})
export class FiatTopupManaConfirmPageModule {}
