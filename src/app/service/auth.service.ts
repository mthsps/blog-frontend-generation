import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { 
    
  }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  signin(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>("https://springbackendblog.herokuapp.com/users/login", userLogin)
  }

  signup(user: User): Observable<User>{
    return this.http.post<User>("https://springbackendblog.herokuapp.com/users/signup", user)
    
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://springbackendblog.herokuapp.com/users/${id}`, 
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }


  signedin(){
    return environment.token != ''
  }

}
