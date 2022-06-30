import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatCreateConfirmPageRoutingModule } from './fiat-create-confirm-routing.module';

import { FiatCreateConfirmPage } from './fiat-create-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatCreateConfirmPageRoutingModule
  ],
  declarations: [FiatCreateConfirmPage]
})
export class FiatCreateConfirmPageModule {}
