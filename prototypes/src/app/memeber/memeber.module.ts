import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemeberPageRoutingModule } from './memeber-routing.module';

import { MemeberPage } from './memeber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemeberPageRoutingModule
  ],
  declarations: [MemeberPage]
})
export class MemeberPageModule {}
