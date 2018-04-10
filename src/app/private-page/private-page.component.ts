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
  QSTicket:string;
  url:string="https://win-qn2klt7k35j/ctkt/single/?appid=0b12d854-85e1-45b7-992b-7d6e1d03f887&obj=NaKQwM&opt=currsel&select=clearall&qlikTicket=";

  constructor(private dataConfigService: DataConfigService,
              private cookieService: CookieService
              ) { }

  ngOnInit() {
    var token = this.cookieService.get('SocialAuthModuleToken');
    

    this.dataConfigService.chkLocal(token)
    .subscribe(data =>{
      this.QSTicket=data.decoded.QSTicket;
      this.url+=data.decoded.QSTicket
    })

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
