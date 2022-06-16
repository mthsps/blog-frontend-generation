import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';
import { Theme } from '../model/Theme';
import { PostService } from '../service/post.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post: Post = new Post()

  theme: Theme = new Theme()
  themes: Theme[]
  idTheme: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/signin'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPost(id)
    this.findAllThemes()
  }

  findByIdPost(id: number){
    this.postService.getByIdPost(id).subscribe((resp: Post) => {
      this.post = resp
    })
  }

  findByIdTheme(){
    this.idTheme = this.post.theme.id
    this.themeService.getByIdTheme(this.idTheme).subscribe((resp: Theme) => {
      this.theme = resp
    })
  }

  findAllThemes(){
    this.themeService.getAllThemes().subscribe((resp: Theme[]) =>{
      this.themes = resp
    })
  }

  update(){
    this.theme.id = this.idTheme
    this.post.theme = this.theme

    this.postService.putPost(this.post).subscribe((resp: Post) => {
      this.post = resp
      alert('Post updated!')
      this.router.navigate(['/home'])
    })
  }

}