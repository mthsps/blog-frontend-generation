import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User
  confirmedPassword: string
  selectedUserType: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmPassword(event: any) {
    this.confirmedPassword = event.target.value
  }

  selectUserType(event: any) {
    this.selectedUserType = event.target.value
  }

  signup() {
    this.user.type = this.selectedUserType

    if (this.user.password != this.confirmedPassword) {
      alert("Passwords are different")
    } else {
      this.authService.signup(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/signin'])
        alert("New user created")
      })
    }

  }

}
