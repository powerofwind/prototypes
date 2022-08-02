import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPage7PageRoutingModule } from './loan-page7-routing.module';

import { LoanPage7Page } from './loan-page7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanPage7PageRoutingModule
  ],
  declarations: [LoanPage7Page]
})
export class LoanPage7PageModule {}
