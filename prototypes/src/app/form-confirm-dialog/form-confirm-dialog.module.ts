import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormConfirmDialogPageRoutingModule } from './form-confirm-dialog-routing.module';

import { FormConfirmDialogPage } from './form-confirm-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormConfirmDialogPageRoutingModule
  ],
  declarations: [FormConfirmDialogPage]
})
export class FormConfirmDialogPageModule {}
