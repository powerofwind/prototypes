import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvPage3PageRoutingModule } from './ev-page3-routing.module';

import { EvPage3Page } from './ev-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvPage3PageRoutingModule
  ],
  declarations: [EvPage3Page]
})
export class EvPage3PageModule {}
