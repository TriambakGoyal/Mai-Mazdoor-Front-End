import { element } from 'protractor';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ModalcontentComponent } from 'src/app/components/modalcontent/modalcontent.component';
import { __values } from 'tslib';

export interface IJob {
  job_id: number,
  expanded:boolean,
  contractor: {
    contractor_id: number;
    contractor_name: string;
    contractor_age: number;
    contractor_sex: string,
    contractor_location: string;
    contractor_rating: string;
  },
  job_name: string,
  job_description: string,
  job_start_date: string,
  job_end_date: string,

}

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  
  job_list: IJob[];
  
  //public items: any = [];
  
  constructor(private http: HttpClient,private modalCtrl : ModalController) {
  }
  
  expandItem(job: IJob): void {
    if (job.expanded) {
      job.expanded = false;
    } else {
      this.job_list.map(listItem => {
        if (job == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  
  
  async showModal(){
    const modal =await this.modalCtrl.create({
      component:  ModalcontentComponent
    });
    await modal.present();
    
  }
  
  ngOnInit() {
    
    this.http.get<IJob[]>("http://127.0.0.1:8000/jobs/get-all-jobs/").subscribe(
    response => {
      this.job_list = response;
      
      for(let i=0; i<this.job_list.length ;i++)
      {
        this.job_list[i]["expanded"]=false;
      }
      console.log(this.job_list)

    }
    );
    
    
  }
  
}
