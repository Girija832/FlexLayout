import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private isUserLoggedIn = false;
  private username;

  constructor(
    private http: HttpClient
  ) {
    this.isUserLoggedIn = false; 
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  getEmployees(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
