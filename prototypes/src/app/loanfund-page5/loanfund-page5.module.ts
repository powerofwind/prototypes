import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanfundPage5PageRoutingModule } from './loanfund-page5-routing.module';

import { LoanfundPage5Page } from './loanfund-page5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanfundPage5PageRoutingModule
  ],
  declarations: [LoanfundPage5Page]
})
export class LoanfundPage5PageModule {}
