import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DairyapiService {

  // uri = 'http://localhost:4000/pocket';
  // uri = 'https://meanapplauncher.herokuapp.com/poc';
  private uri = 'https://pocketdairyapp.herokuapp.com/pocket';


  constructor(private http: HttpClient) { }

  addBusiness(storytitle, place, explainstory, name, email) {
    const obj = {
      storytitle: storytitle,
      place: place,
      explainstory: explainstory,
      name: name,
      email: email
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
  updateBusiness(storytitle, place, explainstory, id) {

    const obj = {
      storytitle: storytitle,
      place: place,
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