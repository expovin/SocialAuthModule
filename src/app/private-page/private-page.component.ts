import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { DataConfigService } from '../shared/data-config.service';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css'],
  providers: [DataConfigService]
})
export class PrivatePageComponent implements OnInit {

  error:boolean;
  content:string;
  code:string;

  constructor(private dataConfigService: DataConfigService,
              private cookieService: CookieService
              ) { }

  ngOnInit() {
    var token = this.cookieService.get('SocialAuthModuleToken');

    console.log("You are in a private area!");
    this.dataConfigService.getPrivateContent(token)
    .subscribe( data =>{
      console.log("CheckLocal Auth: ",data);
      if(data.success){
        console.log("Tutto ok");
        this.error=false;
        this.content=data.content;
      }
      else{
        console.log("Errore");
        this.error=true;
        this.code=data.status;
        this.content=data.msg;
      }
    }, error => {
      console.log("Error catch : ",error);
      this.error=true;
      this.code=error.status;
      this.content=error.statusText;
    })
  }

}