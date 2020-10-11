import { AvtarComponent } from './avtar/avtar.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';



@NgModule({
  declarations: [SlideComponent,AvtarComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgModule,
  ]
})
export class ComponentsModule { }
