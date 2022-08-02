import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPage2PageRoutingModule } from './loan-page2-routing.module';

import { LoanPage2Page } from './loan-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanPage2PageRoutingModule
  ],
  declarations: [LoanPage2Page]
})
export class LoanPage2PageModule {}
