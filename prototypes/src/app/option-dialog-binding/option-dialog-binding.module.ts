import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionDialogBindingPageRoutingModule } from './option-dialog-binding-routing.module';

import { OptionDialogBindingPage } from './option-dialog-binding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OptionDialogBindingPageRoutingModule
  ],
  declarations: [OptionDialogBindingPage]
})
export class OptionDialogBindingPageModule {}
