import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupManaPageRoutingModule } from './fiat-topup-mana-routing.module';

import { FiatTopupManaPage } from './fiat-topup-mana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupManaPageRoutingModule
  ],
  declarations: [FiatTopupManaPage]
})
export class FiatTopupManaPageModule {}
