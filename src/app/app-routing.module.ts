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
import { PostsComponent } from './views/posts/posts.component';
import { ProtectBlogGuard } from './guards/authentication/protect-blog.guard';


const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostsComponent, children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ViewComponent},
    {path: 'view/:id', component: ViewPostComponent}
  ]},
  {path: 'blog', component: BlogComponent, children: [
    {path: '', redirectTo: 'create', pathMatch: 'full'},    
    {path: 'create', component: CreateComponent, canActivate: [ProtectBlogGuard]},
    {path: 'auth', children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},    
      {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
      {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]}
    ]},
  ]},
  {path: 'callback', component: CallbackComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
