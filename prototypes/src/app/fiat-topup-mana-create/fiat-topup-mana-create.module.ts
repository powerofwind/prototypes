import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatTopupManaCreatePageRoutingModule } from './fiat-topup-mana-create-routing.module';

import { FiatTopupManaCreatePage } from './fiat-topup-mana-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatTopupManaCreatePageRoutingModule
  ],
  declarations: [FiatTopupManaCreatePage]
})
export class FiatTopupManaCreatePageModule {}
