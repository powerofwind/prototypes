import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanfundPage6PageRoutingModule } from './loanfund-page6-routing.module';

import { LoanfundPage6Page } from './loanfund-page6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanfundPage6PageRoutingModule
  ],
  declarations: [LoanfundPage6Page]
})
export class LoanfundPage6PageModule {}
