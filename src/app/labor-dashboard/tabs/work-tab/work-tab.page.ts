import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-work-tab',
  templateUrl: './work-tab.page.html',
  styleUrls: ['./work-tab.page.scss'],
})
export class WorkTabPage implements OnInit {

  constructor(private translateConfigService: TranslateConfigService){
    this.translateConfigService.setLanguage(localStorage.getItem("language"));
}

  ngOnInit() {
  }

}
