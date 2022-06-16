import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private http: HttpClient
  ) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllThemes(): Observable<Theme[]>{
    return this.http.get<Theme[]>('https://springbackendblog.herokuapp.com/themes',  
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  postTheme(theme:Theme): Observable<Theme>{
    return this.http.post<Theme>('https://springbackendblog.herokuapp.com/themes', theme,  
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getByIdTheme(id: number): Observable<Theme>{
    return this.http.get<Theme>(`https://springbackendblog.herokuapp.com/themes/${id}`,  
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getThemeByDescription(themeDescription: string): Observable<Theme[]> {
    return this.http.get<Theme[]>(`https://springbackendblog.herokuapp.com/themes/name/${themeDescription}`,  
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  putTheme(theme: Theme): Observable<Theme>{
    return this.http.put<Theme>('https://springbackendblog.herokuapp.com/themes', theme,  
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  deleteTheme(id: number): Observable<Theme>{
    return this.http.delete<Theme>(`https://springbackendblog.herokuapp.com/themes/${id}`,  
    {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

}
