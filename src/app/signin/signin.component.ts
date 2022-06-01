import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }

  signin() {
    this.authService.signin(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp

      environment.id = this.userLogin.id
      environment.name = this.userLogin.name
      environment.email = this.userLogin.email
      environment.imageUrl = this.userLogin.imageUrl
      environment.token = this.userLogin.token

      this.router.navigate(['/home'])
    }, err =>{
      if(err.status == 500 || err.status == 401) {
        alert("User not found or incorrect password")
      }
    })
  }
}
