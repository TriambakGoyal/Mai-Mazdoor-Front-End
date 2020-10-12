import { Component, OnInit } from '@angular/core';
import { ModalController} from "@ionic/angular";
import { Input, Output, EventEmitter } from '@angular/core';
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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async close(){
    await this.modalCtrl.dismiss(this.filter_detail);
  }
  
//   @Output() passEntry: EventEmitter<any> = new EventEmitter();

//   constructor(
//     public activeModal: NgbActiveModal
//   ) { }

//   ngOnInit() {
//     console.log(this.filter_detail);
//   }

//   passBack() {
//     this.passEntry.emit(this.filter_detail);
//     this.activeModal.close(this.filter_detail);
//   }

}
