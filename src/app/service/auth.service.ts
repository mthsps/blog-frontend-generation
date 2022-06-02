import { HttpClient } from '@angular/common/http';
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

  signin(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>("https://personalblogspring.herokuapp.com/users/login", userLogin)
  }

  signup(user: User): Observable<User>{
    return this.http.post<User>("https://personalblogspring.herokuapp.com/users/signup", user)
    
  }

  signedin(){
    return environment.token != ''
  }

}
