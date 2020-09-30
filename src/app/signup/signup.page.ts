import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit() {
  }

}
