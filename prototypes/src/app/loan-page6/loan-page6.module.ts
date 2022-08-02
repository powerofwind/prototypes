import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPage6PageRoutingModule } from './loan-page6-routing.module';

import { LoanPage6Page } from './loan-page6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanPage6PageRoutingModule
  ],
  declarations: [LoanPage6Page]
})
export class LoanPage6PageModule {}
