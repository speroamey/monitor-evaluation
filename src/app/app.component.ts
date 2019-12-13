import { PrincipalService, CONNEXION } from './shared/services/principal.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
declare let jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  inactivityTimeout: any;
  isLoggedIn: boolean;
  loading = false;
  constructor(private principal: PrincipalService, private router: Router) {
   
  }
  ngOnInit(){
    this.router.events.subscribe((v) => this.navigationInterceptor(v ));
    // window.reload()
    
  }
    //window.onload = resetTimer;
   
    navigationInterceptor(event): void {
      if (event instanceof NavigationStart) {
          this.loading = true;
      }
      if (event instanceof NavigationEnd) {
          this.loading = false;
      }
      if (event instanceof NavigationCancel) {
          this.loading = false;
      }
      if (event instanceof NavigationError) {
          this.loading = false;
      }
  }
}
