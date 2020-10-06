import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.page.html',
  styleUrls: ['./profile-pic.page.scss'],
})
export class ProfilePicPage implements OnInit {
imgUrl : string = '/assets/logo/logo_1.png';
FiletoUpload: File =null;
  constructor() { }

  ngOnInit() {
  }
  handleFileInput(file : FileList){
    this.FiletoUpload= <File>file.item(0);

    console.log(this.FiletoUpload);

    //Show Image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imgUrl= event.target.result;
    }
    reader.readAsDataURL(this.FiletoUpload);

  }
}
