import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanfundPage2PageRoutingModule } from './loanfund-page2-routing.module';

import { LoanfundPage2Page } from './loanfund-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanfundPage2PageRoutingModule
  ],
  declarations: [LoanfundPage2Page]
})
export class LoanfundPage2PageModule {}
