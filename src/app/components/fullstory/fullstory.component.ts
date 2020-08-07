import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-fullstory',
  templateUrl: './fullstory.component.html',
  styleUrls: ['./fullstory.component.css']
})
export class FullstoryComponent implements OnInit {
  business: any = {};
  demoimage = 'https://speedify.com/wp-content/uploads/gamer-8.png';

  constructor(private SpinnerService: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router, private bs: BookService) {
  }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.route.params.subscribe(params => {
      this.bs.readfullstory(params['id']).subscribe(res => {
        this.business = res;
        this.SpinnerService.hide();
      });
    });
  }

}
