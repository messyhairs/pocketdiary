import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DairyapiService } from '../../services/dairyapi.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-noteit',
  templateUrl: './noteit.component.html',
  styleUrls: ['./noteit.component.css']
})
export class NoteitComponent implements OnInit {
  result: any;
  userdetails: string;
  arraydata: any = [];
  currentemail: any;
  finaldatas: any = [];
  demoimage = 'https://speedify.com/wp-content/uploads/gamer-8.png';

  constructor(private bookservice: BookService,
    private SpinnerService: NgxSpinnerService,
    private ds: DairyapiService, private router: Router) { }

  ngOnInit(): void {
    this.userdetails = localStorage.getItem('currentUser');
    this.arraydata.push(JSON.parse(this.userdetails));
    this.arraydata.forEach(element => {
      this.currentemail = element.email;
    });
    this.SpinnerService.show();
    this.bookservice.getbooks().subscribe(res => {
      this.result = res;
      this.SpinnerService.hide();
      this.result.users.forEach(userstory => {
        if (this.currentemail === userstory.email) {
          this.finaldatas.push(userstory);
          console.log(this.finaldatas);
        }
      });

    });
  }
  deletestories(id): void {
    this.ds.deleteBusiness(id).subscribe(res => {
      this.router.navigate(['/']);

    });
  }
}
