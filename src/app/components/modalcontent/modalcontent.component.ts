import { Component, OnInit } from '@angular/core';
import { ModalController} from "@ionic/angular";
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.scss'],
})
export class ModalcontentComponent implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  async close(){
    await this.modalCtrl.dismiss(this.filter_detail);
    await this.modalCtrl.dismiss();

    console.log(this.filter_detail);
    
  }

// location:string="";

  ngOnInit() {
    // console.log("On initial"+this.filter_detail);
  }
  

//   get_local(){
//     localStorage.setItem('local',this.location);
//     console.log(this.location);
//   }
@Input() public filter_detail={
  job_name: '',
  location: ''
};
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
