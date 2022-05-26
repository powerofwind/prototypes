import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopupConfirmPageRoutingModule } from './topup-confirm-routing.module';

import { TopupConfirmPage } from './topup-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopupConfirmPageRoutingModule
  ],
  declarations: [TopupConfirmPage]
})
export class TopupConfirmPageModule {}

