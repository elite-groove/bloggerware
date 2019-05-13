import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;

  constructor(private authService: AuthenticationService, private router: Router) { }
  isLoggedIn;
  _authConfig;

  ngOnInit() {
    this.authService.authConfig.subscribe(
      authConfig => {
        this._authConfig = authConfig;
        this.isLoggedIn = this._authConfig.isLoggedIn;
      }
    );
  }

  reloadBlogForm() {
    window.location.href = '/blog/create';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/posts/list']);
  }

}
