import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccapiService } from '../../services/accapi.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userforms: FormGroup;
  error: any;
  returnUrl: string;
  public isMobilevar = false;
  constructor(
    private router: ActivatedRoute,
    private services: AccapiService,
    private formbuilder: FormBuilder,
    private routes: Router) { }

  ngOnInit(): void {
    this.userforms = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    this.services.login(this.userforms.value).subscribe(result => {
      // this.routes.navigate(['/creatediary']);
      location.href = '/creatediary';

    },
      err => {
        this.error = err.error;
        console.log(this.error);
      });
  }
}
