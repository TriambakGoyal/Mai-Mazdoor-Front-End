import { element } from 'protractor';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ModalcontentComponent } from 'src/app/components/modalcontent/modalcontent.component';
import { __values } from 'tslib';

import { TranslateConfigService } from 'src/app/translate-config.service';

export interface IJob {
  job_id: number,
  contractor: {
    contractor_id: number;
    contractor_name: string;
    contractor_age: number;
    contractor_sex: string,
    contractor_location: string;
    contractor_rating: string;
  },
  job_skill: {
    skill_desc: string;
    skill_id: string;
  }
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

  selectedLanguage:string;
  
  job_list: IJob[];

  filter_detail:any={
    skill:[],
    location:'',
    job_date:'',
  };
  
  //public items: any = [];
  
  constructor(private http: HttpClient,
    private modalCtrl : ModalController, private translateConfigService: TranslateConfigService   ) { 
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    localStorage.setItem("language",this.selectedLanguage); 
  }

  
  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
    localStorage.setItem("language",this.selectedLanguage);
    console.log(localStorage.getItem("language"));
  }
  
  async showModal(){
    // console.log(this.filter_detail);
    const modal =await this.modalCtrl.create({
      component:  ModalcontentComponent,
      componentProps: { filter_detail: this.filter_detail }
    });
    modal.onDidDismiss()
    .then((data) => {
      this.filter_detail = data['data']; // Here's your selected user!
      // console.log("coming back to home page from modal",data['data']);
      // console.log(this.filter_detail);
  });
    await modal.present();

  }
  ngOnInit() {
    
    var seeker_id = localStorage.getItem("id");
    this.http.get<IJob[]>("http://127.0.0.1:8000/jobs/get-all-jobs/"+seeker_id).subscribe(
    response => {
        this.job_list = response;
        // console.log("At opening of home page",this.job_list)
      
      });
  }

  toogleAccordion() {
    const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));
  }

}
