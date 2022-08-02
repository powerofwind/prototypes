import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvPage5PageRoutingModule } from './ev-page5-routing.module';

import { EvPage5Page } from './ev-page5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvPage5PageRoutingModule
  ],
  declarations: [EvPage5Page]
})
export class EvPage5PageModule {}
