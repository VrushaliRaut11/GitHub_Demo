import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './templates/login/login.component';
import { DashboardComponent } from './includes/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent,children:[
      {
        path:'user' ,loadChildren:()=>import('src/app/user/user.module').then(e=>e.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
