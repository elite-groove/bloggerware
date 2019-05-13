import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { AuthConfig } from 'src/app/interfaces/auth-config';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  _window: Window = window;
  subscriptions = new Subscription();
  authConfig: AuthConfig;

  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    this.subscriptions.add(this.authService.authConfig.subscribe(
      (authConfig: AuthConfig) => {
         this.authConfig = authConfig;
         if(this.authConfig.isLoggedIn) {
           this.router.navigate(['/blog/create']);
         }
       }
     ));

    return true;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
