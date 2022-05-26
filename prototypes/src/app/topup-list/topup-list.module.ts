import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopupListPageRoutingModule } from './topup-list-routing.module';

import { TopupListPage } from './topup-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopupListPageRoutingModule
  ],
  declarations: [TopupListPage]
})
export class TopupListPageModule {}
