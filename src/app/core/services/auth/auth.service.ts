import { Injectable, NgZone } from '@angular/core';
//todo lo que necesito en mi servicio de Firebase
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//http agregar modulo
import { HttpClientModule, HttpClient } from '@angular/common/http';
//importo la interfaz 
import { InterfaceLogin, InterfaceRegister } from 'src/app/models/user.interface';
//importo environmente (variables dde entorno)
import { environment } from 'src/environments/environment';
import { User } from 'firebase/auth';
import { from, Observable } from 'rxjs';
//PARA GOOGLE
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Auth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore,
    public afa: AngularFireAuth,  //en el constructor pongo Angular Fire Auth
    public http:HttpClientModule,
    public httpc:HttpClient,
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning

  ) {  
   
   }
    //Esta es la autenticacion normal sin Google ni Facebook
    //debo crear los metodos para login, logout, register etc

    //obviamente el register tiene muchos mas parametros generalmente este es solo el ejemplo
    //  REGISTER
    registerUser(){}
    // registerUser(form:InterfaceRegister):Observable<any>{
    //   console.log(form); //prueba
    //   const url = `${environment.apiCupo}/users`;
    //   return this.httpc.post(url, form); 
    //   }
    //LOGIN
    //metodo de login
    loginUser(){}
    // loginUser(form:InterfaceLogin):Observable<any>{
    //   console.log(form);
    //   const url = `${environment.apiCupo}/users/login`;
    //   return this.httpc.post(url, form); //no entiendo como deberia declarar aqui el FORM
    // } 
   //LOGOUT o SIGNOUT
   //logout
   logoutUser(){}
  //  logoutUser():Promise<void>{
  //   return this.afa.signOut();
  //  }

  getUserAuthState(){}
  //  getUserAuthState():Observable<any>{
  //     return this.afa.authState;
  //  }

   
}
