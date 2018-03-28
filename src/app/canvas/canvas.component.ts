import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { DataConfigService } from '../shared/data-config.service';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [DataConfigService]
})
export class CanvasComponent implements OnInit {

  info;
  token;
  errMessage={status:"",text:""};
  error:boolean=false;

  constructor(private dataConfigService: DataConfigService,
              private route: ActivatedRoute,
              private cookieService: CookieService) { }

  ngOnInit() {

    this.errMessage={status:"",text:""};
    var token = this.cookieService.get('SocialAuthModuleToken');
    console.log("Cookie token: ",token);

    this.dataConfigService.chkLocal(token)
    .subscribe( data =>{
      console.log("CheckLocal Auth: ",data);
      if(!data.success){
        console.log("You are logged out");
        this.error=true;
        this.errMessage.status=data.status;
        this.errMessage.text=data.msg;
      }
      else {
        console.log("You are logged in, token: ",token);
        this.error=false;
        this.token=token;
      }
        
    },
    error =>{
      this.error=true;
      this.errMessage.status=error.status;
      this.errMessage.text=error.statusText;
    })

  }

}
