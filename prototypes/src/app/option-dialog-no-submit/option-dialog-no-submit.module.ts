import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionDialogNoSubmitPageRoutingModule } from './option-dialog-no-submit-routing.module';

import { OptionDialogNoSubmitPage } from './option-dialog-no-submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OptionDialogNoSubmitPageRoutingModule
  ],
  declarations: [OptionDialogNoSubmitPage]
})
export class OptionDialogNoSubmitPageModule {}
