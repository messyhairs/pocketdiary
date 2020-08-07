import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})

export class BookpageComponent implements OnInit {
  preview: string;
  form: FormGroup;
  percentDone: any = 0;
  users = [];
  userdetails: string;
  arraydata: any = [];
  useremail: any;
  usrname: any;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public fileUploadService: BookService
  ) {
    // Reactive Form
    this.userdetails = localStorage.getItem('currentUser');
    this.arraydata.push(JSON.parse(this.userdetails));
    this.arraydata.forEach(element => {
      // console.log(element.email);
      this.useremail = element.email;
      this.usrname = element.name;
    });
    this.form = this.fb.group({
      storytitle: ['', Validators.required],
      place: ['', Validators.required],
      explainstory: ['', Validators.required],
      email: [this.useremail],
      name: [this.usrname],
      avatar: [null]
    });
  }

  ngOnInit() { }

  // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  submitForm() {
    this.fileUploadService.addUser(
      this.form.value.storytitle,
      this.form.value.place,
      this.form.value.explainstory,
      this.form.value.email,
      this.form.value.name,
      this.form.value.avatar
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          this.percentDone = false;
        // this.router.navigate(['users-list']);
      }
    });
  }

}
