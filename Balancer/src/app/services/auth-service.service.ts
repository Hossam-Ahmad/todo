import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    public httpClient: HttpClient,
    public router: Router) {}

  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    return localStorage.setItem('token', token);
  }

  getId() {
    return localStorage.getItem('id');
  }

  setId(id) {
    return localStorage.setItem('id', id);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthenticated()) {
      if (route.url.toString() === 'login' || route.url.toString() === 'register'){
        this.router.navigate(['/discover']);
        return false;
      } else{
        return true;
      }
    } else{
      if (route.url.toString() !== 'login' && route.url.toString() !== 'register' && route.url.toString() !== 'discover'){
        this.router.navigate(['/login']);
        return false;
      } else{
        return true;
      }
    }
  }

  login(data) {
    return this.httpClient.post(`${environment.host}authentication/login`, data);
    // return this.httpClient.post(`http://localhost:3000/authentication/login`, data);
  }

  register(data) {
    return this.httpClient.post(`${environment.host}authentication/register`, data);
    // return this.httpClient.post(`http://localhost:3000/authentication/register`, data);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
