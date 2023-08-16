import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<T> {
  abstract apiURL: string;

  http = inject(HttpClient);

  constructor() {}

  list<T>(): Observable<T[]> {
    return this.http.get<T[]>(this.apiURL);
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.apiURL}/${url}`);
  }

  create<T, K>(resource: T): Observable<K> {
    return this.http.post<K>(this.apiURL, resource);
  }

  update<T, K>(resource: T): Observable<K> {
    return this.http.patch<K>(this.apiURL, resource);
  }

  replace<T, K>(resource: T): Observable<K> {
    return this.http.put<K>(this.apiURL, resource);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.apiURL}/${url}`);
  }
}
