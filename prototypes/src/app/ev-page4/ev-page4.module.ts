import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvPage4PageRoutingModule } from './ev-page4-routing.module';

import { EvPage4Page } from './ev-page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvPage4PageRoutingModule
  ],
  declarations: [EvPage4Page]
})
export class EvPage4PageModule {}
