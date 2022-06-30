import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatDetailPageRoutingModule } from './fiat-detail-routing.module';

import { FiatDetailPage } from './fiat-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatDetailPageRoutingModule
  ],
  declarations: [FiatDetailPage]
})
export class FiatDetailPageModule {}
