import { HomeTabPage } from './home-tab/home-tab.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ModalcontentComponent } from 'src/app/components/modalcontent/modalcontent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
    ],
  declarations: [TabsPage],
  bootstrap:    [ HomeTabPage ],
  entryComponents: [ ModalcontentComponent ]

})
export class TabsPageModule {}
