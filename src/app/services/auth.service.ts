import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:50388';

  constructor(private http: HttpClient) { }

  logIn(login: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/account/login`;
    return this.http.post<User>(url, {login, password}, { withCredentials: true });
  }

  signUp(userName: string, firstName: string, lastName: string, email: string, password: string, confirmPassword: string): Observable<User> {
    const url = `${this.BASE_URL}/account/register`;
    return this.http.post<User>(url, {userName, firstName, lastName, email, password, confirmPassword});
  }

  logout(): Observable<any> {
    const url = `${this.BASE_URL}/account/logout`;
    return this.http.post<any>(url, null, { withCredentials: true });
  }
}