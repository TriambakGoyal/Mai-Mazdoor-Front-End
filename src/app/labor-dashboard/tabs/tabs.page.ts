import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {


 constructor(private translateConfigService: TranslateConfigService){
    this.translateConfigService.setLanguage(localStorage.getItem("language"));
}

  ngOnInit() {
  }

}
