import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanfundPage1PageRoutingModule } from './loanfund-page1-routing.module';

import { LoanfundPage1Page } from './loanfund-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanfundPage1PageRoutingModule
  ],
  declarations: [LoanfundPage1Page]
})
export class LoanfundPage1PageModule {}
