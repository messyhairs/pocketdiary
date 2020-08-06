import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DairyapiService } from '../../services/dairyapi.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private router: Router, private storyser: DairyapiService) {
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
        name: [this.usrname],
        email: [this.useremail],
      });
    });

    // }

  }
  addBusiness(storytitle, place, explainstory, name, email) {
    this.storyser.addBusiness(storytitle, place, explainstory, name, email);
    // this.router.navigate(['/creatediary']);
    // location.href = '/creatediary';
    this.angForm.reset();
  }

  ngOnInit(): void {
  }

}
