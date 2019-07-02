import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { PrincipalService } from './shared/services/principal.service';
import { Router } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: PrincipalService, private router: Router) { }
  canActivate() {
    console.log(this.authService.isLoggedIn);
    if (this.authService.isLoggedIn) {
      // logged in so return true
      console.log(this.authService.isLoggedIn);
      return true;
    } else {
      this.router.navigate([]);

      // this.toastr.error('Echec de la connexion!', 'Erreur');
      return false;
    }
  }
}
