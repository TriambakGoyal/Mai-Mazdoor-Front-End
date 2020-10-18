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
          // console.log("After opening modal",this.filter_list)
        
        });
        this.min=this.datepipe.transform(this.today,"yyyy-MM-dd");
        this.max=this.datepipe.transform(this.today.setMonth(this.today.getMonth() + 2),"yyyy-MM-dd")

  

  }

  async close(){
    this.filter_detail.job_date=this.datepipe.transform(this.filter_detail.job_date,"yyyy-MM-dd");
    await this.modalCtrl.dismiss(this.filter_detail);
    console.log("After closing modal",this.filter_detail);
  }

  clear(){
    this.filter_detail.job_date=null;
    this.filter_detail.location="";
    this.filter_detail.skill=[];
  }
  


}
