import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) {
    // this.buildForm();
   }

   ngOnInit(): void {
  } 
  buildForm(): void { //hare referencia a mi formulario y hago referencia a registerForm con los forms Controls aqui vienen las validaciones
    this.registerForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      firstname:['', Validators.required],
      lastname:['', Validators.required,],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  //esto es para activar los ngIf
  get email(){
    return this.registerForm.get('email')
  }

  get password(){
    return this.registerForm.get('password')
  }

  registerUser(){}
  
  // registerUser(form: any){
  //   this.authService.registerUser(form).subscribe((res)=> {
  //     console.log(res);
  //   })
  // }
  // async registerUser(event: Event): Promise<void>{
  //   event.preventDefault();
  //   const {email, password, confirmPassword} = this.registerForm.value;
  //   try{
  //     if(password === confirmPassword){
  //     const userCredentials = await this.authService.registerUser(password); //se que por aca debo colocar la Api pero me perdi esta vez
  //    }else{
  //     alert('Las contraseñas no son iguales');
  //    }
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
   
}
