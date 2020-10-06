import { UploadService } from './../../upload.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.page.html',
  styleUrls: ['./profile-pic.page.scss'],
})
export class ProfilePicPage implements OnInit {
imgUrl : string = '/assets/logo/logo_1.png';
FiletoUpload: File =null;
  constructor(
    private uploadService: UploadService,
    private router: Router,
  ) { }

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

  uploadImage() {
    const formData = new FormData();
    formData.append('file', this.FiletoUpload);
    formData.append('id',localStorage.getItem('id'))
    this.uploadService.upload(formData).subscribe(
      (res) => {
        console.log("Image Uploaded")
      },
      (err) => {  
        console.log(err);
      }
    );
    this.router.navigate(['/home']);
  }
}
