import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPage1PageRoutingModule } from './loan-page1-routing.module';

import { LoanPage1Page } from './loan-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanPage1PageRoutingModule
  ],
  declarations: [LoanPage1Page]
})
export class LoanPage1PageModule {}
