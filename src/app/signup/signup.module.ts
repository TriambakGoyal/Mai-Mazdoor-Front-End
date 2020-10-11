import { RegisterPage } from './register/register.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { RegisterPageModule } from './register/register.module';
import { AvtarComponent } from '../components/avtar/avtar.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    RegisterPageModule,
    ComponentsModule

  ],
  declarations: [SignupPage,AvtarComponent]
})
export class SignupPageModule {}
