import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  _window: Window = window;

  constructor(private route: ActivatedRoute) { }

  canActivate(): boolean {
    // const isAuthorized: Promise<boolean> = new Promise((resolve, reject) => {
      this.route.queryParams.subscribe(
        params => {
          console.log(params);
          if (params['token']) {
            if(!this._window.localStorage['token']) {
              this._window.localStorage['token'] = params['token'];
            }
          }
        }
      );
    // });

    return true;
  }
}
