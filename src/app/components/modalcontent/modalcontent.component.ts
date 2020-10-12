import { Component, OnInit } from '@angular/core';
import { ModalController} from "@ionic/angular";
@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.scss'],
})
export class ModalcontentComponent implements OnInit {
  public filter_detail={
    job_name: '',
    location: ''
  };
  constructor(private modalCtrl : ModalController) { }
  async close(){
    await this.modalCtrl.dismiss(this.filter_detail);
  }

  ngOnInit() {}

}
