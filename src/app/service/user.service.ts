import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  putUser(user: User): Observable<User>{
    return this.http.put<User>('https://springbackendblog.herokuapp.com/users/update', user, 
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

}
