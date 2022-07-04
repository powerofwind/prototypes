import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatWithdrawManaPageRoutingModule } from './fiat-withdraw-mana-routing.module';

import { FiatWithdrawManaPage } from './fiat-withdraw-mana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatWithdrawManaPageRoutingModule
  ],
  declarations: [FiatWithdrawManaPage]
})
export class FiatWithdrawManaPageModule {}
