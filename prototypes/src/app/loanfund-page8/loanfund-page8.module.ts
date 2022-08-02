import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanfundPage8PageRoutingModule } from './loanfund-page8-routing.module';

import { LoanfundPage8Page } from './loanfund-page8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanfundPage8PageRoutingModule
  ],
  declarations: [LoanfundPage8Page]
})
export class LoanfundPage8PageModule {}
