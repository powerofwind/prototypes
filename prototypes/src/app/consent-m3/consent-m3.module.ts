import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentM3PageRoutingModule } from './consent-m3-routing.module';

import { ConsentM3Page } from './consent-m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConsentM3PageRoutingModule
  ],
  declarations: [ConsentM3Page]
})
export class ConsentM3PageModule {}
