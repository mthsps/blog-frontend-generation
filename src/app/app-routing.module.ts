import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [

    {path:'', redirectTo: 'signin', pathMatch: 'full'},
    {path: "signin", component: SigninComponent},
    {path: "signup", component: SignupComponent},

    {path: 'home', component: HomeComponent},
    {path: 'theme', component: ThemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }