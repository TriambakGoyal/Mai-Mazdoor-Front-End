import { AvtarComponent } from './../../../components/avtar/avtar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTabPageRoutingModule } from './home-tab-routing.module';

import { HomeTabPage } from './home-tab.page';
import { ModalController} from '@ionic/angular'
import { async } from '@angular/core/testing';
import { ModalcontentComponent } from 'src/app/components/modalcontent/modalcontent.component';
import { ExpandableComponent } from "src/app/components/expandable/expandable.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTabPageRoutingModule
  ],
  declarations: [HomeTabPage,AvtarComponent, ModalcontentComponent,ExpandableComponent]
})
export class HomeTabPageModule {


  
}
