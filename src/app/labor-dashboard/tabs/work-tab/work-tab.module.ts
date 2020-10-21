import { AvtarComponent } from './../../../components/avtar/avtar.component';
import { ExpandableComponent } from './../../../components/expandable/expandable.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkTabPageRoutingModule } from './work-tab-routing.module';

import { TranslateModule } from "@ngx-translate/core";
import { WorkTabPage } from './work-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkTabPageRoutingModule,
    TranslateModule
  ],
  declarations: [WorkTabPage,ExpandableComponent,AvtarComponent]
})
export class WorkTabPageModule {}
