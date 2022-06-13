import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';
import { Theme } from '../model/Theme';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post: Post = new Post()
  posts: Post[]

  theme: Theme = new Theme()
  themes: Theme[]
  idTheme: number

  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private postService: PostService,
    private themeService: ThemeService,
    private authService: AuthService
  ) { }
  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == '') {
      alert("Your session expired... Sign in again.")
      this.router.navigate(['/signin'])
    }

    this.getAllThemes()
    this.getAllPosts()

  }

  getAllThemes(){
    this.themeService.getAllThemes().subscribe((resp: Theme[]) => {
      this.themes = resp
    })
  }

  findByIdTheme(){
    this.themeService.getByIdTheme(this.idTheme).subscribe((resp: Theme) =>{
      this.theme = resp
    })
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe((resp: Post[]) => {
      this.posts = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  publish(){
    this.theme.id = this.idTheme
    this.post.theme = this.theme

    this.user.id = this.idUser
    this.post.user = this.user

    this.postService.postPost(this.post).subscribe((resp: Post) => {
      this.post = resp
      alert('Post successfully published')
      this.post = new Post()
      this.getAllPosts()
    })
  }
}
