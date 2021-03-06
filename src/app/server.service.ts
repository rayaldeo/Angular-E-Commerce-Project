import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Produce } from './api/Produce';
import { User } from './api/User';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

    constructor(private http: HttpClient) {
    }

    private async request(method: string, url: string, data?: any) {
      const result = this.http.request(method, url, {
        body: data,
        responseType: 'json',
        observe: 'body',
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      });
      return new Promise((resolve, reject) => {
        result.subscribe(resolve, reject);
      });
    }

    getProduce():Observable<Produce[]> {
      return this.http.get<Produce[]>(`${environment.serverUrl}/produce`);
    }

    getUser(email:string, password:string):Observable<User[]>{
      return this.http.get<User[]>(`${environment.serverUrl}/users/email.password`);
    }

    // createEvent(event) {
    //   return this.request('POST', `${environment.serverUrl}/event`, event);
    // }
    //
    // updateEvent(event) {
    //   return this.request('PUT', `${environment.serverUrl}/event/${event.id}`, event);
    // }
    //
    // deleteEvent(event) {
    //   return this.request('DELETE', `${environment.serverUrl}/event/${event.id}`);
    // }
}
