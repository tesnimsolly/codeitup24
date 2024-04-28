import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ServicesComponent } from './component/services/services.component';

const routes: Routes = [
  {
    path :'services', component : ServicesComponent,
   
  },
  {
    path :'', component : HomeComponent,
   
  },
  {
    path :'login', component : LoginComponent,
   
  },]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
