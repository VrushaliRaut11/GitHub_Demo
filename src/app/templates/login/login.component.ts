import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}

  login:any={
    username:'',
    password:''
  }

  onLogin()
  {
    if(this.login.username=='admin' && this.login.password=='admin123')
    {
      this.router.navigate(['dashboard'])
    }
    else{
      alert("Enter valid crediential")
    }
  }
}
