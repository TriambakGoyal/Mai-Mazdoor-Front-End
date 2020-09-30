import { Component, OnInit } from '@angular/core';
import { ModalController} from "@ionic/angular";
@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.scss'],
})
export class ModalcontentComponent implements OnInit {

  constructor(private modalCtrl : ModalController) { }
  async close(){
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
