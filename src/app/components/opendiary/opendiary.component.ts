import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DairyapiService } from '../../services/dairyapi.service';

@Component({
  selector: 'app-opendiary',
  templateUrl: './opendiary.component.html',
  styleUrls: ['./opendiary.component.css']
})
export class OpendiaryComponent implements OnInit {

  angForm: FormGroup;
  userdetails: string;
  arraydata: any = [];
  useremail: any;
  usrname: any;
  constructor(private fb: FormBuilder, private storyser: DairyapiService) {
    this.createForm();
  }

  createForm(): void {
    // if (this.userdetails) {
    this.userdetails = localStorage.getItem('currentUser');
    this.arraydata.push(JSON.parse(this.userdetails));
    this.arraydata.forEach(element => {
      // console.log(element.email);
      this.useremail = element.email;
      this.usrname = element.name;
      this.angForm = this.fb.group({
        storytitle: ['', Validators.required],
        place: ['', Validators.required],
        explainstory: ['', Validators.required],
        email: [this.useremail],
        name: [this.usrname],
      });
    });

    // }

  }
  addBusiness(storytitle, place, explainstory, email, name) {
    this.storyser.addBusiness(storytitle, place, explainstory, email, name);
  }

  ngOnInit(): void {
  }

}
