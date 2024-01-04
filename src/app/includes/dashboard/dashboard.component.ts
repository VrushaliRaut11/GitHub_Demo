import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router) { }

  navigateTo(path:string)  
  {
    //this.router.navigate(['dashboard', path])
    this.router.navigateByUrl('/dashboard/user/'+path)
    //                        /dashboard/user/adduser
    //                        /dashboard/user/viewuser
  }
 
 
 
}
