import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.page.html',
  styleUrls: ['./simple-form.page.scss'],
})
export class SimpleFormPage implements OnInit {
  var1="";
  var2="";


  constructor() { }

  ngOnInit() {
  }
    register(form) {
      console.log(form.value)
      this.var1=form.value["name"];
      this.var2=form.value["email"];
  }

}
