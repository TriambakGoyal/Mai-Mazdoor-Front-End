import { __values } from 'tslib';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



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
})
export class SignupPage implements OnInit {

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }
  register(form) {
    this.http.post("http://127.0.0.1:8000/seeker/sign-up/", form.value).subscribe(
      res => {
        console.log(res)
      }
    )
    this.router.navigate(['/home']);

  }
}
