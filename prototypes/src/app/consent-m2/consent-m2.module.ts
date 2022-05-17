import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentM2PageRoutingModule } from './consent-m2-routing.module';

import { ConsentM2Page } from './consent-m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConsentM2PageRoutingModule
  ],
  declarations: [ConsentM2Page]
})
export class ConsentM2PageModule {}
