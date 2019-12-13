import { Component, OnInit } from "@angular/core";
import { PrincipalService } from "../../shared/services/principal.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {  HttpErrorResponse } from "@angular/common/http";
declare let jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  isSaving: boolean;
  error: string = '';
  errorSignUp: string = '';
  model: any = {};
  loading: boolean;
  data: boolean;
  isAuthenticated: boolean;
  reset: any= {};
  message: string;
  validationErrors = [];

  constructor(private router: Router, public principal: PrincipalService, private toastr: ToastrService) {
    this.isAuthenticated=false;
    this.validationErrors = []
  }

  ngOnInit() {
  }


  login() {
    if (!this.model.username &&!this.model.password) return;
    this.isSaving = true;
    this.principal.login(this.model)
        .subscribe((result) => {
            this.isSaving = false;
            localStorage.setItem('authenticationtoken', result.access_token);
            localStorage.setItem('refreshtoken', result.refresh_token);
            localStorage.setItem('auth', 'true');
            this.isAuthenticated=true;
            this.connectedUser();
            this.model={};
            this.router.navigate(['/layout/user-home/mainboard']);
            this.toastr.success('Succès!', 'vous êtes authentifié!');
        }, 
        (error)=>{
            // console.log("something",error);
            this.isSaving = false;
            console.log(error);
            this.model={};
            this.toastr.error('Echec!', 'Non Authentifié!');
            this.error= error.json().message;
            // this.toastr.error('Erreur!', 'Identifiants Incorrect!');
    });
}

get isLogin(){
    if( localStorage.getItem('authenticationtoken')){
     return true;
    }else{
        return false
    }
}
credentials(credentials: any): any {
    throw new Error("Method not implemented.");
}


register() {
    if (!this.model.name || !this.model.phone || !this.model.email) return;
    this.errorSignUp="";
    this.validationErrors=[];
    this.isSaving = true;
    this.principal.register(this.model)
    .subscribe( (resp) => {
        console.log(resp);
        this.isSaving = false;
        this.model={};
        this.toastr.success('Succès!', 'Compte créé avec succès!');
        this.message = 'Félictation votre Inscription a été pris en compte, Un mail vous a été envoyé, veuillez prendre connaissance des informations nécessaires pour pouvoir vous connecter '
        jQuery('#info-token').modal('show');
    },(error : HttpErrorResponse | any) => {
       
        const errorMessages = new Array<{ propName: string; errors: string }>();
        
        if (error.status === 422) {
                const data = JSON.parse(error._body)
                const fields = Object.entries(data || {});
                const mapped = Object.keys(fields[1][1]).map(key => ({champ: key, value: fields[1][1][key]}));
                this.validationErrors = mapped;
                
              // TODO: extract errors here and match onto the form
        }
        
        this.toastr.error('Echec!', 'Désolé votre compte n\'a pas pu être créé!');
        this.errorSignUp = "Une erreur s'est produite lors de l'opération,Veuillez réessayer";
        this.isSaving = false;
        // this.model={};
    });
}


disconnect(){
    this.principal.getDisconnect()
    .subscribe( (resp) => {
        // console.log(resp);
        this.toastr.success('Succès!', 'Vous êtes déconnecté!');
        this.router.navigate(['/layout/home']);
        localStorage.removeItem('authenticationtoken');
        localStorage.removeItem('refreshtoken');

    }, (error) => {
        console.log(error);
        this.toastr.success('Echec!', 'Erreur de déconnection!');

    });
}
openResetModal(){
    jQuery('#connexion').modal('hide');
    jQuery('#resetingPasswordToken').modal('show');
}

resetingPasswordToken(){
    this.isSaving = true;
    this.principal.resetingPasswordToken(this.reset)
    .subscribe( (resp) => {
      
        console.log(resp);
        // this.router.navigate(['/layout/home']);
        jQuery('#resetingPasswordToken').modal('hide');
        this.isSaving = false;
        this.message = resp.message || 'Un mail vous a été envoyé, veuillez vous connecter a votre boite mail pour réinitialiser votre mot de passe'
        jQuery('#info-token').modal('show');
    }, (error) => {
        console.log(error);
        jQuery('#resetingPasswordToken').modal('hide');
        this.isSaving = false;
        
        this.message = error.message || 'Une erreur est survenue, merci de réessayer ultérieurement'
        jQuery('#info-token').modal('show');
    });
}

connectedUser() {
    this.principal.connectedUser ()
    .subscribe( (resp) => {
        console.log(resp);
       this.model={};
    }, (error) => {
        console.log(error);
    });
}



  
}
