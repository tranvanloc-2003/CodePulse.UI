import { Injectable } from '@angular/core';
import { LoginRequestModel } from '../models/login-equest-model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponseModel } from '../models/login-response-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { UserModel } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  constructor(private http: HttpClient, private cookieServices : CookieService) { }
  $user = new BehaviorSubject<UserModel | undefined>(undefined);
  login(request: LoginRequestModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${environment.apiBaseUrl}/api/auth/login`, {
      email: request.email,
      password: request.password
    })
  }

  setUser(user: UserModel): void {
    this.$user.next(user);
    localStorage.setItem('user', user.email);
    localStorage.setItem('roles', user.roles.join(','));
  }

  user(): Observable<UserModel | undefined>{
    return this.$user.asObservable();
  }
  getUser(): UserModel | undefined {
    const email = localStorage.getItem('user');
    const roles = localStorage.getItem('roles');
    if (email && roles) {
      const user: UserModel = {
        email: email,
        roles: roles.split(',')
      };
      return user;
    }
    return undefined;
  }
  logout(): void {
    localStorage.clear();
    this.$user.next(undefined);
    this.cookieServices.delete('Authorization','/');
  }
}
