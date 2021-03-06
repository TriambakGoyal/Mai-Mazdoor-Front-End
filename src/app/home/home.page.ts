import { Component ,OnInit} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface ILoginResponse{
  id:number,
  STATUS:string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  hide : boolean=true;

  constructor(private http: HttpClient,
    private router: Router) { }
    ngOnInit() {
    }

    toggle(){
      this.hide=!this.hide;

    }
  
  login(form) {
    console.log(form.value);

    this.http.post<ILoginResponse>("http://127.0.0.1:8000/seeker/login/", form.value).subscribe(
      res => {
        console.log(res.id);
        localStorage.setItem("id", res.id.toString());
      },
      (err) => {
        console.log(err);
      }
    )
    this.router.navigate(['/tabs/home-tab']);
  }
}
