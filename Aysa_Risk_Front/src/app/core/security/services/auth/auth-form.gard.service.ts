import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFormGuardService implements CanActivate {
  isLogged!: boolean | null;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean> {
    if (!this.authService.ExistToken) {
      return this.router.navigate(['/seguridad/login']);
    }
    return true;
  }
}
