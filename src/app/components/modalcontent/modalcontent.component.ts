import { Component, OnInit } from '@angular/core';
import { ModalController} from "@ionic/angular";
import { Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

export interface ISkill{
  skill_id: number,
  skill_desc:string,
}

@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.scss'],
  providers:[DatePipe]
})



export class ModalcontentComponent implements OnInit {
  
  filter_list: ISkill[];

  today: Date=new Date();
  min:any; 
  max: any; 

  public filter_detail={
    skill:[],
    location:'',
    job_date:'',
  };
  Location: any[] = [
    {
      city: "Chandigarh",
      State: 'Madhya Pradesh',
    },
    {
      city: "Pune",
      State: 'Madhya Pradesh',
    },
    {
      city: "Delhi",
      State: 'Madhya Pradesh',
    }
  ];
  
  constructor(private modalCtrl : ModalController,private http: HttpClient,private datepipe: DatePipe) {

   }


  ngOnInit(){
    this.http.get<ISkill[]>("http://127.0.0.1:8000/seeker/get-skills/").subscribe(
      response => {
          this.filter_list = response;
          console.log(this.filter_list)
        
        });
        console.log(this.today);
        this.min=this.datepipe.transform(this.today,"yyyy-MM-dd");
        this.max=this.datepipe.transform(this.today.setMonth(this.today.getMonth() + 2),"yyyy-MM-dd")
        console.log(this.min," ",this.max);


  

  }
  // void {
  //   throw new Error('Method not implemented.');
  // }

  async close(){
    this.filter_detail.job_date=this.datepipe.transform(this.filter_detail.job_date,"yyyy-MM-dd");
    await this.modalCtrl.dismiss(this.filter_detail);
    console.log(this.filter_detail);
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
