import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('https://springbackendblog.herokuapp.com/posts', this.token)
  }

  getByIdPost(id: number): Observable<Post>{
    return this.http.get<Post>(`https://springbackendblog.herokuapp.com/posts/${id}`, this.token)
  }


  postPost(post: Post) : Observable<Post>{
    return this.http.post<Post>('https://springbackendblog.herokuapp.com/posts', post, this.token)
  }

  putPost(post: Post): Observable<Post>{
    return this.http.put<Post>('https://springbackendblog.herokuapp.com/posts', post, this.token)
  }

  deletePost(id: number){
    return this.http.delete(`https://springbackendblog.herokuapp.com/posts/${id}`, this.token)
  }


}
