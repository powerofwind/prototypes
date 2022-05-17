import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentPageRoutingModule } from './consent-routing.module';

import { ConsentPage } from './consent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConsentPageRoutingModule
  ],
  declarations: [ConsentPage]
})
export class ConsentPageModule {}
