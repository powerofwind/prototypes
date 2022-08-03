import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletMainPageRoutingModule } from './wallet-main-routing.module';

import { WalletMainPage } from './wallet-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletMainPageRoutingModule
  ],
  declarations: [WalletMainPage]
})
export class WalletMainPageModule {}
