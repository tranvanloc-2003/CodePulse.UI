import { Injectable } from '@angular/core';
import { LoginRequestModel } from '../models/login-equest-model';
import { Observable } from 'rxjs';
import { LoginResponseModel } from '../models/login-response-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  constructor(private http: HttpClient) { }
  login(request: LoginRequestModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${environment.apiBaseUrl}/api/auth/login`, {
      email: request.email,
      password: request.password
    })
  }
}
