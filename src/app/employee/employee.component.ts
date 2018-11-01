import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  allData: any = [];

  constructor(private spinnerService: Ng4LoadingSpinnerService,
              private employeeService: EmployeeService,
              private router: Router,
              public sharedService: SharedService) { }

  ngOnInit() {
    this.getEmployeeData();
  }
  getEmployeeData() {
    this.spinnerService.show();
    this.employeeService.getEmployees().subscribe(res => {
      this.spinnerService.hide();
      this.allData = res;
      console.log('Data===> ',res);
    })
  }
  goBack() {
    this.router.navigate(['']);
  }
  logout() {
    this.router.navigate(['login']);
  }

}
