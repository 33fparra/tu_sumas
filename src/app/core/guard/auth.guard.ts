import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
//importamos authService
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    public authService: AuthService, // usamos el servicio de autenticacion
    public router: Router //usamos el router
  ){
    
   }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  return true
}
   
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if(this.authService.isLoggedIn !== true) {
  //     this.router.navigate(['auth/login'])
  //   }
  //   return true;
  // }
  // canActivate(): Observable<boolean>{
  //   return this.authService.getUserAuthState().pipe(
  //     map((user)=>user !== null),
  //     tap((hasUser =>{
  //       if(!hasUser){
  //         this.router.navigate(['auth/login'])
  //       }
  //     }))
  //   )
  // }
 
}
