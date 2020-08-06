import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccapiService } from './services/accapi.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userdetails: any;
  arraydata: any = [];
  userdatas: any;
  finaldatas: any;
  userforms: FormGroup;
  error: any;
  public isMobilevar = false;
  useremail: any;
  status = true;

  constructor(private formbuilder: FormBuilder, private service: AccapiService, private router: Router,
  ) {
  }

  ngOnInit(): void {
    // if (this.userdetails) {
      this.userdetails = localStorage.getItem('currentUser');
      this.arraydata.push(JSON.parse(this.userdetails));
      this.arraydata.forEach(element => {
        // console.log(element.email);
        this.useremail = element.email;
      });
    // }

    // this.userforms = this.formbuilder.group({
    //   gender: ['', Validators.required],
    //   dob: ['', Validators.required],
    //   mobilenumber: ['', Validators.required],
    //   useremail: [this.useremail],
    //   status: [this.status]
    // });
    // console.log(this.useremail);
  }
  logout() {
    this.service.logout();
    location.href = '/';
  }
  // moredetails() {
  //   this.services.addmoredetails(this.userforms.value).subscribe(result => {
  //     this.loader.display(true);
  //     console.log(result);
  //     this.userforms.reset();
  //   },
  //     err => {
  //       this.error = err.error;
  //       console.log(this.error);
  //       // this.toastr.errorToastr(this.error, 'Warning', {
  //       //   position: 'bottom-left'
  //       // });
  //     });
  // }
}

