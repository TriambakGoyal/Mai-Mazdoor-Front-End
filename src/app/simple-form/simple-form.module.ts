import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpleFormPageRoutingModule } from './simple-form-routing.module';

import { SimpleFormPage } from './simple-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimpleFormPageRoutingModule
  ],
  declarations: [SimpleFormPage]
})
export class SimpleFormPageModule {}
