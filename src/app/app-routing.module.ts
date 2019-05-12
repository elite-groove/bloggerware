import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ViewComponent } from './views/posts/view/view.component';
import { CreateComponent } from './views/blog/create/create.component';
import { BlogComponent } from './views/blog/blog.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', children: [
    {path: '', redirectTo: 'view', pathMatch: 'full'},
    {path: 'view', component: ViewComponent}
  ]},
  {path: 'blog', component: BlogComponent, children: [
    {path: '', redirectTo: 'create', pathMatch: 'full'},    
    {path: 'create', component: CreateComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
