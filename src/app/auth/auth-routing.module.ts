import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importamos los componenets de este modulo
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [ //generamos todos los redireccionamientos de este modulo
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'reset',
    component: ResetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
