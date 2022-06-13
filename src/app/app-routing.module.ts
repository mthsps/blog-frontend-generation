import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDeleteComponent } from './post-delete/post-delete.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ThemeDeleteComponent } from './theme-delete/theme-delete.component';
import { ThemeEditComponent } from './theme-edit/theme-edit.component';
import { ThemeComponent } from './theme/theme.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  
  {path:'', redirectTo: 'signin', pathMatch: 'full'},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},

  {path: 'home', component: HomeComponent},
  {path: 'themes', component: ThemeComponent},

  {path: 'themes/delete/:id', component: ThemeDeleteComponent},
  {path: 'themes/edit/:id', component: ThemeEditComponent},

  {path: 'posts/edit/:id', component:PostEditComponent},
  {path: 'posts/delete/:id', component:PostDeleteComponent},

  {path: 'users/edit/:id', component:UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }