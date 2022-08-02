import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPage5PageRoutingModule } from './loan-page5-routing.module';

import { LoanPage5Page } from './loan-page5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanPage5PageRoutingModule
  ],
  declarations: [LoanPage5Page]
})
export class LoanPage5PageModule {}
