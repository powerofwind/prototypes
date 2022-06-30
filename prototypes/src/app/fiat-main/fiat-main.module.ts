import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatMainPageRoutingModule } from './fiat-main-routing.module';

import { FiatMainPage } from './fiat-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatMainPageRoutingModule
  ],
  declarations: [FiatMainPage]
})
export class FiatMainPageModule {}
