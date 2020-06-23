import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public httpClient: HttpClient) {}

  search(data) {
    return this.httpClient.post(`${environment.host}search/search`, data);
    // return this.httpClient.post(`http://localhost:3001/search/search`, data);
  }

  list(page) {
    return this.httpClient.get(`${environment.host}search/list?page=${page}`);
    // return this.httpClient.get(`http://localhost:3001/search/list?page=${page}`);
  }

  create(data) {
    return this.httpClient.post(`${environment.host}crud/create`, data);
    // return this.httpClient.post(`http://localhost:3002/crud/create`, data);
  }

  update(data) {
    return this.httpClient.put(`${environment.host}crud/update`, data);
    // return this.httpClient.put(`http://localhost:3002/crud/update`, data);
  }

  delete(data) {
    return this.httpClient.post(`${environment.host}crud/delete`, data);
    // return this.httpClient.post(`http://localhost:3002/crud/delete`, data);
  }

}
