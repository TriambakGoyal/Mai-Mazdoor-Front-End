import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrialPagePageRoutingModule } from './trial-page-routing.module';

import { TrialPagePage } from './trial-page.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrialPagePageRoutingModule
  ],
  declarations: [TrialPagePage]
})
export class TrialPagePageModule {}
