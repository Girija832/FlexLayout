import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData: string;
  constructor(private router: Router,
              private user: EmployeeService,
              public sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.newEmployeeData.subscribe( data => {
      this.userData = data;
      console.log('Shared data', data);
      });
  }

  public userLogin() {
    this.router.navigate(['employee']);
  }
  loginUser(e) {
    e.preventDefault();
    let email = e.target.elements[0].value;
    let password = e.target.elements[1].value;

    if (email === 'admin@gmail.com' && password === 'admin') {
      this.user.setUserLoggedIn();
      this.router.navigate(['employee']);
    }
    console.log(email, password);
    return false;
  }

}
