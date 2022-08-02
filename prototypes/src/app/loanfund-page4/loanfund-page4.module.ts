import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanfundPage4PageRoutingModule } from './loanfund-page4-routing.module';

import { LoanfundPage4Page } from './loanfund-page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanfundPage4PageRoutingModule
  ],
  declarations: [LoanfundPage4Page]
})
export class LoanfundPage4PageModule {}
