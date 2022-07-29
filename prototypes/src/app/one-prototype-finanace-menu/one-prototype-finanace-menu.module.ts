import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePrototypeFinanaceMenuPageRoutingModule } from './one-prototype-finanace-menu-routing.module';

import { OnePrototypeFinanaceMenuPage } from './one-prototype-finanace-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePrototypeFinanaceMenuPageRoutingModule
  ],
  declarations: [OnePrototypeFinanaceMenuPage]
})
export class OnePrototypeFinanaceMenuPageModule {}
