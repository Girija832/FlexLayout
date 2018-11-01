import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public newEmployeeData = new Subject<any>();
  // cast = this.newEmployeeData.asObservable();
  constructor() { }

  getSharedData(data) {
    this.newEmployeeData.next(data);
  }
}
