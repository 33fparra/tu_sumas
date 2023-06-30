import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//canActivate esta aqui
import { AuthGuard } from './core/guard/auth.guard';
//componentes aqui
import { AddPaymentsComponent } from './private/add-payments/add-payments.component';
import { DonateComponent } from './private/donate/donate.component';
import { ConditionsComponent } from './public/conditions/conditions.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },  
{ path: 'conditions', component: ConditionsComponent },

//Estas vistas son privadas
{ path: 'donate', component: DonateComponent},
{ path: 'add-payments', component: AddPaymentsComponent},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
