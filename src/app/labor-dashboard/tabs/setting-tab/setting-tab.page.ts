import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

export interface IProfile{
  s_name: string,
  s_gender: string,
  s_phno: string,
  s_dob: string,
  s_locailty: string,
  s_city: string,
  s_state: string,
  s_skills: {
    skill_id: string,
    skill_desc: string,
  }[],
  s_image:string
}
@Component({
  selector: 'app-setting-tab',
  templateUrl: './setting-tab.page.html',
  styleUrls: ['./setting-tab.page.scss'],
})
  

  
export class SettingTabPage implements OnInit {
  profile: IProfile;

  

  constructor(
    private http: HttpClient
  ) { 
    // this.profile.s_name = "";
    // this.profile.s_gender = "";
    // this.profile.s_phno = "";
    // this.profile.s_dob = "";
    // this.profile.s_locailty = "";
    // this.profile.s_city = "";
    // this.profile.s_state = "";
    // this.profile.s_skills = [];
    // this.profile.s_image = "";
  }

  ngOnInit() {
    var seeker_id = localStorage.getItem("id");
    console.log("hello",seeker_id);
    this.http.get<IProfile>("http://127.0.0.1:8000/seeker/get-profile/"+seeker_id).subscribe(
      response => {
        console.log(response);
        this.profile = response;
        // this.profile['s_dob']=this.datepipe.transform(this.profile['s_dob'], 'dd/MM/yyyy');
        });
  }

}
