import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';
import { AlertsService } from '../service/alerts.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme-edit',
  templateUrl: './theme-edit.component.html',
  styleUrls: ['./theme-edit.component.css']
})
export class ThemeEditComponent implements OnInit {

  theme: Theme = new Theme()

  constructor(
    private themeService: ThemeService,
    private alertService: AlertsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/signin'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTheme(id)
  }

  findByIdTheme(id: number){
    this.themeService.getByIdTheme(id).subscribe((resp: Theme) => {
      this.theme = resp
    })
  }

  update(){
    this.theme.posts = []
    this.themeService.putTheme(this.theme).subscribe((resp: Theme)=>{
      this.theme = resp
      this.alertService.showAlertSuccess('Theme updated!')
      this.router.navigate(['/themes'])
    } , err => {
      if(err.status == 409 || err.status == 500) {
        this.alertService.showAlertInfo("Theme already exits")
      }
    })
  }
}
