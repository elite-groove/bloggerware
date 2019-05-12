import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { IconDefinition } from '@ant-design/icons-angular';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

// Import what you need. RECOMMENDED. ✔️
import { AccountBookFill, AlertFill, AlertOutline, TeamOutline, UserOutline, LockOutline } from '@ant-design/icons-angular/icons';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './views/blog/create/create.component';
import { ViewComponent } from './views/posts/view/view.component';
import { HomeComponent } from './views/home/home.component';
import { BlogComponent } from './views/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { FormParser } from './classes/form-parser';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './views/auth/register/register.component';
import { LoginComponent } from './views/auth/login/login.component';


const icons: IconDefinition[] = [ AccountBookFill, LockOutline, AlertFill, TeamOutline, UserOutline ];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    HomeComponent,
    BlogComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
    FormParser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
