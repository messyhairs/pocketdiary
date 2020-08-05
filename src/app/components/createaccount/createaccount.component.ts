import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccapiService } from '../../services/accapi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creataeccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  userforms: FormGroup;
  error: any;
  messageSuccess: boolean;
  constructor(private formbuilder: FormBuilder, private services: AccapiService, private router: Router) {
  }
  ngOnInit() {
    this.userforms = this.formbuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      name: ['', Validators.required],
      // mobilenumber: ['', Validators.required]
    });
  }

  createaccount() {
    this.services.cerateaccount(this.userforms.value).subscribe(result => {
      this.router.navigateByUrl('');
    },
      err => {
        this.error = err.error;
      });
  }
}
