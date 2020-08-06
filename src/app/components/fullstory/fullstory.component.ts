import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DairyapiService } from '../../services/dairyapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-fullstory',
  templateUrl: './fullstory.component.html',
  styleUrls: ['./fullstory.component.css']
})
export class FullstoryComponent implements OnInit {
  business: any = {};

  constructor(private SpinnerService: NgxSpinnerService,
              private route: ActivatedRoute,
              private router: Router, private bs: DairyapiService) {
  }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
        this.SpinnerService.hide();
      });
    });
  }

}
