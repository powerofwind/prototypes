import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePrototypeHomePageRoutingModule } from './one-prototype-home-routing.module';

import { OnePrototypeHomePage } from './one-prototype-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePrototypeHomePageRoutingModule
  ],
  declarations: [OnePrototypeHomePage]
})
export class OnePrototypeHomePageModule {}
