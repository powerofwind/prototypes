import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopupListM4PageRoutingModule } from './topup-list-m4-routing.module';

import { TopupListM4Page } from './topup-list-m4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopupListM4PageRoutingModule
  ],
  declarations: [TopupListM4Page]
})
export class TopupListM4PageModule {}
