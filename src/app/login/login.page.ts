import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  compareWithFn = (o1: { id: any; }, o2: { id: any; }) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;

  constructor() {
   
  }

  ngOnInit() {
  }
 

}
