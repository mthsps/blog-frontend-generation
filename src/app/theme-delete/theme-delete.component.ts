import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';
import { AlertsService } from '../service/alerts.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme-delete',
  templateUrl: './theme-delete.component.html',
  styleUrls: ['./theme-delete.component.css']
})
export class ThemeDeleteComponent implements OnInit {

  theme: Theme = new Theme()
  idTheme: number

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

    this.idTheme = this.route.snapshot.params['id']
    this.findByIdTheme(this.idTheme)

  }

  findByIdTheme(id: number){
    this.themeService.getByIdTheme(id).subscribe((resp: Theme)=>{
      this.theme = resp
    })
  }

  delete(){
    this.themeService.deleteTheme(this.idTheme).subscribe(()=>{
      this.alertService.showAlertSuccess('Theme deleted')
      this.router.navigate(['/themes'])
    })
  }

}
