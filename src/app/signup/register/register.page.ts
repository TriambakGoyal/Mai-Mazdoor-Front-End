import { __values } from 'tslib';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export interface ISkill{
  skill_id: number,
  skill_desc:string
}


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  hide: boolean = true;
  seeker_id: string;
 

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }
  user_register(form) {
    var old_form = JSON.parse(localStorage.getItem('formdata'));
    var new_form = Object.assign(old_form, form.value);
    this.http.post("http://127.0.0.1:8000/seeker/sign-up/", new_form).subscribe(
      res => {
        this.seeker_id = res["id"];
        // localStorage.setItem('id', this.seeker_id);
      }
    )

}
toggle(){
  this.hide=!this.hide;

}

location: any[] = [
  {
    city: "Bhopal",
    State: 'Madhya Pradesh',
  },
  {
    city: "Jaipur",
    State: 'Madhya Pradesh',
  },
  {
    city: "Gwalior",
    State: 'Madhya Pradesh',
  }
];




}
