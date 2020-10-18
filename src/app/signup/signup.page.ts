import { __values } from 'tslib';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';





export interface ISignup {
  s_name: string,
  s_gender: string,
  s_age: string,
  s_location: string,
  s_phno: string,
}

export interface ISkill{
  skill_id: number,
  skill_desc:string
}



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  providers:[DatePipe],
})
export class SignupPage implements OnInit {
  date: Date = new Date(); 
  year: any; 
  skill_list: ISkill[];

  slideOpts = {
    initialSlide: 0,
    speed: 600,
    autoplay: true,
  };
  work: any[] =[
    {
      Skill:"Plumbing",
    
    },
    {
      Skill:"Construction",
    }
    ];
    work_skill: any = {
      header: 'Your Skill',
      subHeader: 'Choose you work field',
      message: 'More than one can be choosed',
      translucent: true
    };
  constructor(
    private http: HttpClient,
    private router: Router) {
      console.log("Date = " + this.date);
      this.date.setFullYear(this.date.getFullYear() - 19);
      this.year=this.date.getFullYear();
     }

  ngOnInit() {
    this.http.get<ISkill[]>("http://127.0.0.1:8000/seeker/get-skills/").subscribe(
      response => {
          this.skill_list = response;
          console.log(this.skill_list)
        
        });
  }

  user_detail(form:{ value: any;})
  {
    localStorage.setItem('formdata', JSON.stringify(form.value));
    console.log(JSON.parse(localStorage.getItem('formdata')));
    this.router.navigate(['/register'])
  };

  register(form: { value: any; }) {
    this.http.post("http://127.0.0.1:8000/seeker/sign-up/", form.value).subscribe(
      res => {
        console.log(res)
      }
    )
    this.router.navigate(['/home']);

  }
}
