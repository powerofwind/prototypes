import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentKycPageRoutingModule } from './consent-kyc-routing.module';

import { ConsentKycPage } from './consent-kyc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConsentKycPageRoutingModule
  ],
  declarations: [ConsentKycPage]
})
export class ConsentKycPageModule {}
