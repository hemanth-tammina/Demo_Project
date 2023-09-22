import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
username: any;
password: any;
  constructor(private router:Router){
 }
 login() : void {
  if(this.username == 'admin' && this.password == 'admin'){
   this.router.navigate(["dashboard"]);
  }else {
    alert("Invalid credentials");
  }
}
}
