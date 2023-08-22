import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  register() {
    console.log('register');
  }

  login() {
    console.log('login');
  }

  logout() {
    console.log('logout');
  }

  isAuthenticated() {
    console.log('isAuthenticated');
    return true;
  }
}
