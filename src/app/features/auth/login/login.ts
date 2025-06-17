import { Component } from '@angular/core';
import { LoginRequestModel } from './models/login-request-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
model: LoginRequestModel
constructor(){
  this.model ={
    email: '',
    password: ''
  }
}
onSubmitLogin():void{
console.log('Login submitted', this.model);
}
}
