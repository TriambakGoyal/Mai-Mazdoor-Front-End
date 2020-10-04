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
  myDate:any=new Date();

  slideOpts = {
    initialSlide: 0,
    speed: 600,
    autoplay: true,
  };
  constructor(private http: HttpClient,private router: Router,private datePipe: DatePipe) {
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
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
