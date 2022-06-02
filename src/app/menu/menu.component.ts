import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name = environment.name
  photo = (environment.imageUrl==null) ? "https://randomuser.me/api/portraits/lego/7.jpg" : environment.imageUrl

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signout() {
    this.router.navigate(['/signin'])
    environment.email = ''
    environment.name = ''
    environment.token = ''
    environment.imageUrl = ''
    environment.id = 0
  }

}
