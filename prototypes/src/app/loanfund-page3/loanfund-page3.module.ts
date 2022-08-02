import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanfundPage3PageRoutingModule } from './loanfund-page3-routing.module';

import { LoanfundPage3Page } from './loanfund-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanfundPage3PageRoutingModule
  ],
  declarations: [LoanfundPage3Page]
})
export class LoanfundPage3PageModule {}
