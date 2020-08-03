import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import Pocketuser from './pocketuser';

@Injectable({
  providedIn: 'root'
})
export class AccapiService {
  private BaseUrl = `http://localhost:4000/pocketuser`;

  constructor(private http: HttpClient) { }

  cerateaccount(userdetails: Pocketuser) {
    return this.http.post(this.BaseUrl + '/signup', userdetails);
  }

  login(userdetails: Pocketuser) {
    return this.http.post<any>(this.BaseUrl + '/login', userdetails)
      .map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
