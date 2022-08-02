import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPage4PageRoutingModule } from './loan-page4-routing.module';

import { LoanPage4Page } from './loan-page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanPage4PageRoutingModule
  ],
  declarations: [LoanPage4Page]
})
export class LoanPage4PageModule {}
