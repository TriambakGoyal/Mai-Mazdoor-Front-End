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
  s_skill: {
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
    private http: HttpClient,private datePipe: DatePipe
  ) { }

  ngOnInit() {
    var seeker_id=localStorage.getItem("id")
    console.log("hello",seeker_id);
    this.http.get<IProfile>("http://127.0.0.1:8000/seeker/get-profile/"+seeker_id).subscribe(
      response => {
        console.log(response);
        this.profile = response;
        this.profile['s_dob']=this.datePipe.transform(this.profile['s_dob'], 'dd-MM-yyyy');
        });
  }

}
