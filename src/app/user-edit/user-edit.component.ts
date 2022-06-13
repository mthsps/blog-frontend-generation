import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmedPassword: string
  selectedUserType: string

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/signin'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmPassword(event: any) {
    this.confirmedPassword = event.target.value
  }

  userType(event: any) {
    this.userType = event.target.value
  }

  update() {
    this.user.type = this.selectedUserType

    if (this.user.password != this.confirmedPassword) {
      alert('Password incorrect')
    } else {
      this.userService.putUser(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/signin'])
        alert('User updated. Sign in again.')
        environment.token = ''
        environment.name = ''
        environment.imageUrl = ''
        environment.id = 0

        this.router.navigate(['/signin'])
      })
    }
  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

}
