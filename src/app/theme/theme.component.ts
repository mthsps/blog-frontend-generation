import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';
import { AlertsService } from '../service/alerts.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: Theme = new Theme()
  themes: Theme[]

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private alertService: AlertsService
  ) { }

  ngOnInit(){
    if(environment.token==''){
      this.router.navigate(['/signin'])
    }

    this.findAllThemes()
  }

  findAllThemes(){
    this.themeService.getAllThemes().subscribe((resp:Theme[])=>{
      this.themes = resp
    })
  }

  register(){
    this.themeService.postTheme(this.theme).subscribe((resp:Theme)=>{
      this.theme=resp

      this.alertService.showAlertSuccess('Theme created!')
      this.findAllThemes()
      this.theme = new Theme()
    }, err => {
      if(err.status == 409 || err.status == 500) {
        this.alertService.showAlertInfo("Theme already exits")
      }
    })
  }

}
