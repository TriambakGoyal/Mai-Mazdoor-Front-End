import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkTabPageRoutingModule } from './work-tab-routing.module';

import { WorkTabPage } from './work-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkTabPageRoutingModule
  ],
  declarations: [WorkTabPage]
})
export class WorkTabPageModule {}
