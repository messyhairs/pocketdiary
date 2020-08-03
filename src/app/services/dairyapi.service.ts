import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DairyapiService {

  uri = 'http://localhost:4000/pocket';
  // uri = 'https://meanapplauncher.herokuapp.com/business';

  constructor(private http: HttpClient) { }

  addBusiness(storytitle, palce, explainstory) {
    const obj = {
      storytitle: storytitle,
      palce: palce,
      explainstory: explainstory
    };
    // console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getBusinesses() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  updateBusiness(storytitle, palce, explainstory, id) {

    const obj = {
      storytitle: storytitle,
      palce: palce,
      explainstory: explainstory
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('updted sucessfully'));
  }
  deleteBusiness(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}