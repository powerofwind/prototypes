import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiatCreatePageRoutingModule } from './fiat-create-routing.module';

import { FiatCreatePage } from './fiat-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiatCreatePageRoutingModule
  ],
  declarations: [FiatCreatePage]
})
export class FiatCreatePageModule {}
