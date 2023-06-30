import { Component, OnInit } from '@angular/core';
//formulario
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; //agregamos 
import { Router } from '@angular/router';
//services
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //debemos agregar referencias al formulario reactivo podemos colocarle por ejemplo loginForm
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router:Router
  ) { 
    this.buildForm();
  }
  ngOnInit(): void {
  } 
  buildForm(): void { //hare referencia a mi formulario y hago referencia a loginForm con los forms Controls aqui vienen las validaciones
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  //esto es para activar los ngIf
  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  loginUser(form: any){}
  //   // console.log('pruebaexito', form);
  //   this.authService.loginUser(form).subscribe((res)=> {
  //     console.log('Respuesta Login', res); 
  //     localStorage.setItem('idToken', res.data.idToken);
  //     console.log(res.status);
  //     if(res.status){
  //       console.log('Login Exitoso');
  //       this.router.navigate(['/donate']);
  //     }else{
        
  //     }
      
  //   }),
  //   (error: any) => console.error(`Ha ocurrido un error en proceso de login: ${error}`),
  //   () => console.info('Se ha completado la llamada de login a Firebase')
  // };

  
  loginbyGoogle(){
    // this.authService.loginbyGoogle();
  };

  
   loginbyFacebook(){}
  

}
