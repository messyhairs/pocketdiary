import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DairyapiService } from '../../services/dairyapi.service';
import Pocket from '../../services/pocket';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private bs: DairyapiService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      storytitle: ['', Validators.required],
      place: ['', Validators.required],
      // song: [''],
      explainstory: ['']
    });
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }
  updateBusiness(storytitle, place, explainstory) {
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(storytitle, place, explainstory, params['id']);
      this.router.navigate(['/']);
    });
  }
}
