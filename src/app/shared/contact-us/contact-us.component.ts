import { Component, OnInit } from '@angular/core';
import {ContactUsService } from './contact-us.service'
import { ToastrService } from 'ngx-toastr';

declare let SmoothScroll: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contact:any
  loading: boolean;

  constructor(private contactUsService: ContactUsService, private toastr: ToastrService) { 
    this.contact={};
    this.loading= false;
  }

  ngOnInit() {
  }

  sendMessage(){
      this.loading=true;
      this.contactUsService.sendMessage(this.contact)
        .subscribe(
          (resp) => {
            console.log(resp);
            this.toastr.success('Succès!', 'Message envoyé !');
            // this.contact = resp.data;
            this.loading=false;
          },
          (error) => {
            this.toastr.error('Echec!', 'Message non envoyé, veuillez réessayer!');
            // console.log(error);
            return;
          }
        )
    
  }
}
