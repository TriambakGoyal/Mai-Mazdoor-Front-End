import { __values } from 'tslib';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { yearsPerPage } from '@angular/material/datepicker';




export interface ISignup {
  s_name: string,
  s_gender: string,
  s_age: string,
  s_location: string,
  s_phno: string,
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  providers:[DatePipe],
})
export class SignupPage implements OnInit {
  date: Date = new Date(); 
  year:any; 

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
  constructor(private http: HttpClient,private router: Router,private datePipe: DatePipe) {
      // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      // this.myDate.setDate(this.myDate - 20);
      // this.myDate=Date.now().valueOf()
      console.log("Date = " + this.date);
      this.date.setFullYear(this.date.getFullYear() - 19);
      this.year=this.date.getFullYear();
   
// console.log("Year = " + date.getFullYear());  
// console.log("Date = " + date.getDate());  
// console.log("Month = " + date.getMonth());  
// console.log("Day = " + date.getDay());  
// console.log("Hours = " + date.getHours());  
// console.log("Minutes = " + date.getMinutes());  
// console.log("Seconds = " + date.getSeconds());  
     }

  ngOnInit() {
  }

  user_detail(form:{ value: any;})
  {
    console.log(form.value);
    console.log(sessionStorage.getItem(name));

  }

  register(form: { value: any; }) {
    this.http.post("http://127.0.0.1:8000/seeker/sign-up/", form.value).subscribe(
      res => {
        console.log(res)
      }
    )
    this.router.navigate(['/home']);

  }
}
