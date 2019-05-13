import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ViewComponent } from './views/posts/view/view.component';
import { CreateComponent } from './views/blog/create/create.component';
import { BlogComponent } from './views/blog/blog.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { CallbackComponent } from './views/auth/callback/callback.component';
import { AuthGuard } from './guards/authentication/auth.guard';
import { ViewPostComponent } from './views/posts/view-post/view-post.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ViewComponent},
    {path: 'view/:id', component: ViewPostComponent}
  ]},
  {path: 'blog', component: BlogComponent, children: [
    {path: '', redirectTo: 'create', pathMatch: 'full'},    
    {path: 'create', component: CreateComponent},
    {path: 'auth', children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},    
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]},
  ]},
  {path: 'callback', component: CallbackComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
