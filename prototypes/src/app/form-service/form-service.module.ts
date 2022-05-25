import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormServicePageRoutingModule } from './form-service-routing.module';

import { FormServicePage } from './form-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormServicePageRoutingModule
  ],
  declarations: [FormServicePage]
})
export class FormServicePageModule {}
