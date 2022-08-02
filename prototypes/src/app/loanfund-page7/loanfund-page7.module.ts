import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanfundPage7PageRoutingModule } from './loanfund-page7-routing.module';

import { LoanfundPage7Page } from './loanfund-page7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanfundPage7PageRoutingModule
  ],
  declarations: [LoanfundPage7Page]
})
export class LoanfundPage7PageModule {}
