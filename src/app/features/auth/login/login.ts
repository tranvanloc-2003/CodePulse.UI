import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequestModel } from '../models/login-equest-model';
import { AuthServices } from '../services/auth.services';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  model: LoginRequestModel
  constructor(private authService: AuthServices) {
    this.model = {
      email: '',
      password: ''
    }
  }
  onSubmitLogin(): void {
    console.log('Login submitted', this.model);
    this.authService.login(this.model).subscribe({
      next: (response) => {
        console.log('Login successful', response);

      },error: (error) => {
        console.error('Login failed', error);
      }
    })
  }
}
