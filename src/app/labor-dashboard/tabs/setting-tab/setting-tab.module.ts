import { AvtarComponent } from './../../../components/avtar/avtar.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingTabPageRoutingModule } from './setting-tab-routing.module';
import { TranslateModule } from "@ngx-translate/core";

import { SettingTabPage } from './setting-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingTabPageRoutingModule,
    TranslateModule
  ],
  declarations: [SettingTabPage,AvtarComponent,],
  providers:[DatePipe]
})
export class SettingTabPageModule {}
