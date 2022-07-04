import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawManaCreatePageRoutingModule } from './fiat-withdraw-mana-create-routing.module';

import { FiatWithdrawManaCreatePage } from './fiat-withdraw-mana-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawManaCreatePageRoutingModule
  ],
  declarations: [FiatWithdrawManaCreatePage]
})
export class FiatWithdrawManaCreatePageModule {}
