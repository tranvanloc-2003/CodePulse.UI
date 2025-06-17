import { Injectable } from '@angular/core';
import { LoginRequestModel } from '../models/login-equest-model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponseModel } from '../models/login-response-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  constructor(private http: HttpClient) { }
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
}
