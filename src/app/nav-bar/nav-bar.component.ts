import { Component, OnInit } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { LoginComponent } from "../login/login.component"
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common'

import { DataConfigService } from '../shared/data-config.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [DataConfigService]
})
export class NavBarComponent implements OnInit {

  logStatus:boolean;

  constructor(private dialogService:DialogService,
              private dataConfigService: DataConfigService,
              private cookieService: CookieService,
              private location: Location) { }

  ngOnInit() {

    var token = this.cookieService.get('SocialAuthModuleToken');

    this.dataConfigService.chkLocal(token)
    .subscribe( data =>{
      console.log("CheckLocal Auth: ",data);
      if(!data.success){
        console.log("You are logged out");
        this.logStatus=false;
      }
      else {
        console.log("You are logged in, token: ",token);
        this.logStatus=true;
      }
        
    },
    error =>{
      this.logStatus=false;
    })

  }

  logOut(){
    console.log("Logging Out");
    var token = this.cookieService.delete('SocialAuthModuleToken','');
    location.reload();
  }

  openLoginModal(){
    console.log("Open Login Modal");

    this.dialogService.addDialog(LoginComponent, {
      title : "Astract",
      message : "Messaggio di esempio"
    })
    .subscribe ( isConfirmed => {
      if(isConfirmed) {
        console.log('accepted');
      }
      else {
        console.log('declined');
      }
    },
    err => {
      console.log("Error : ",err);
    })
  }
}
