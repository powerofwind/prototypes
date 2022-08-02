import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvPage1PageRoutingModule } from './ev-page1-routing.module';

import { EvPage1Page } from './ev-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvPage1PageRoutingModule
  ],
  declarations: [EvPage1Page]
})
export class EvPage1PageModule {}
