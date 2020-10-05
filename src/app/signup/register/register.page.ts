import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  hide: boolean=true;


  constructor() { }

  ngOnInit() {
  }
user_register(form){

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
