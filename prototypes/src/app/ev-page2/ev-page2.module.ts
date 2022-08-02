import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvPage2PageRoutingModule } from './ev-page2-routing.module';

import { EvPage2Page } from './ev-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvPage2PageRoutingModule
  ],
  declarations: [EvPage2Page]
})
export class EvPage2PageModule {}
