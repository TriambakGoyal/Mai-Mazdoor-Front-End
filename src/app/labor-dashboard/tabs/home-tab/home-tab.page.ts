import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { __values } from 'tslib';

export interface IJob {
  job_id: number;
  contractor: {
    contractor_id: number;
    contractor_name: string;
    contractor_age: number;
    contractor_sex: string,
    contractor_location: string;
    contractor_rating: string;
  },
  job_name: string,
  job_description: string,
  job_start_date: string,
  job_end_date: string
}

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {

  constructor(private http: HttpClient) {}

  job_list: IJob[];

  ngOnInit() {
    this.http.get<IJob[]>("http://127.0.0.1:8000/jobs/get-all-jobs/").subscribe(
      response => {
        this.job_list = response;
        console.log(this.job_list)
      }
    );
  }

}
