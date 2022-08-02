import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanfundPage9PageRoutingModule } from './loanfund-page9-routing.module';

import { LoanfundPage9Page } from './loanfund-page9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanfundPage9PageRoutingModule
  ],
  declarations: [LoanfundPage9Page]
})
export class LoanfundPage9PageModule {}
