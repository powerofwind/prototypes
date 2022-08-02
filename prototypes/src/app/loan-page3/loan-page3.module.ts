import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPage3PageRoutingModule } from './loan-page3-routing.module';

import { LoanPage3Page } from './loan-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanPage3PageRoutingModule
  ],
  declarations: [LoanPage3Page]
})
export class LoanPage3PageModule {}
