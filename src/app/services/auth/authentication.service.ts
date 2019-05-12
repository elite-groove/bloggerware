import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from 'src/app/interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  _window: Window = window;

  constructor(private http: HttpClient) { }

  saveToken(token: Token) {
    this._window.localStorage['token'] = token;
  }

  googleLogin() {
    return this._window.location.href = (environment.host + '/auth/google/callback');
  }

  register() {

  }
}
