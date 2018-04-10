import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { CookieService } from 'ngx-cookie-service';

import { UserCredential } from "../user-credential";
import { DataConfigService } from '../shared/data-config.service';

export interface loginModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends DialogComponent<loginModel, boolean> implements loginModel {

  loginError:boolean=false;
  credential = new UserCredential("","");
  title: string;
  message: string;
  

  constructor(dialogService: DialogService,
              private dataConfigService: DataConfigService,
              private cookieService: CookieService,
              private location: Location) 
  { 
    super(dialogService); 
  }
  

  onSubmit(){
    console.log("Submit form : ",this.credential);
    this.dataConfigService.loginLocal(this.credential)
    .subscribe ( result =>{
      console.log("Result : ",result);
      this.cookieService.set( 'SocialAuthModuleToken', result.token );

      location.reload();
      this.close();

    }, 
    error =>{
      this.loginError=true;
      console.log("Error : ",error);
      this.close();
    })
  }

  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code


    this.result = true;
    this.close();
  }

}
