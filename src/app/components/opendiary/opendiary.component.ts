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
  constructor(private fb: FormBuilder, private storyser: DairyapiService) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      storytitle: ['', Validators.required],
      place: ['', Validators.required],
      explainstory: ['', Validators.required]
    });
  }
  addBusiness(storytitle, palce, explainstory) {
    this.storyser.addBusiness(storytitle, palce, explainstory);
  }

  ngOnInit(): void {
  }

}
