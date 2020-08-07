import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  // private baseURL = `http://localhost:4000/books`;
  private baseURL = 'https://poketapp.herokuapp.com/books';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Get Users
  getbooks() {
    return this.http.get(this.baseURL + '/getbooks');
  }

  // Create User
  addUser(storytitle: string, place: string, explainstory: string, email: string, name: string, profileImage: File): Observable<any> {
    const formData: any = new FormData();
    formData.append('storytitle', storytitle),
      formData.append('place', place),
      formData.append('explainstory', explainstory),
      formData.append('email', email),
      formData.append('name', name);
    formData.append('avatar', profileImage);

    return this.http.post<Book>(`${this.baseURL}/create-user`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  readfullstory(id) {
    return this
      .http
      .get(`${this.baseURL}/edit/${id}`);
  }
  deletebook(id) {
    return this
      .http
      .get(`${this.baseURL}/delete/${id}`);
  }
}