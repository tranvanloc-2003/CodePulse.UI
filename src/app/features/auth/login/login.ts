import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequestModel } from '../models/login-equest-model';
import { AuthServices } from '../services/auth.services';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  model: LoginRequestModel
  constructor(private authService: AuthServices, private cookieServices: CookieService, private router: Router) {
    this.model = {
      email: '',
      password: ''
    }
  }
  onSubmitLogin(): void {
    // console.log('Login submitted', this.model);
    this.authService.login(this.model).subscribe({
      next: (response) => {
        // console.log('Login successful', response);
        // dat cookie
        this.cookieServices.set('Authorization', `Bearer ${response.token}`, undefined, '/', undefined, true, 'Strict');

        // chuyen trang ve trang chu
        this.router.navigateByUrl('/');

        //dat user
        this.authService.setUser({
          email: response.email,
          roles: response.roles
        })

      }, error: (error) => {
        console.error('Login failed', error);
      }
    })
  }
}
