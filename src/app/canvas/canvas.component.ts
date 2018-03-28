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

  info = {  Status:"", 
            Code:"", 
            Token:"", 
            type:"", 
            iat:"", 
            exp:"", 
            Message:"", 
            username:"",
            tokenReleaseTime:"", 
            tokenExpiryTime:""
          };
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
        this.info.Status="You are logged out";
        this.info.Code=data.status;
        this.info.Message=data.msg;

        this.errMessage.status=data.status;
        this.errMessage.text=data.msg;
      }
      else {
        var iatDate = new Date(data.decoded.iat*1000);
        var day = "0" + iatDate.getDay();
        var month = "0" + iatDate.getMonth();
        var year = iatDate.getFullYear();
        var hours = "0" + iatDate.getHours();
        var minutes = "0" + iatDate.getMinutes();
        var seconds = "0" + iatDate.getSeconds();
        this.info.tokenReleaseTime = day.substr(-2)+"/"+month.substr(-2)+"/"+year+" @"
                                    +hours.substr(-2)+":"+minutes.substr(-2)+":"+seconds.substr(-2);

        var expDate = new Date(data.decoded.exp*1000);
        var day = "0" + expDate.getDay();
        var month = "0" + expDate.getMonth();
        var year = expDate.getFullYear();
        var hours = "0" + expDate.getHours();
        var minutes = "0" + expDate.getMinutes();
        this.info.tokenExpiryTime = day.substr(-2)+"/"+month.substr(-2)+"/"+year+" @"
                                    +hours.substr(-2)+":"+minutes.substr(-2)+":"+seconds.substr(-2);


        console.log("You are logged in, token: ",token);
        this.error=false;
        this.info.Status="You are logged in";
        this.info.Code=data.status;
        this.info.Message="Success!";
        this.info.Token=token;
        this.info.username=data.decoded.username;
        this.info.iat=data.decoded.iat;
        this.info.type=data.decoded.type;
        this.info.exp=data.decoded.exp;
      
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
