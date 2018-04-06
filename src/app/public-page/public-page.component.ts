import { Component, OnInit } from '@angular/core';

import { DataConfigService } from '../shared/data-config.service';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css'],
  providers: [DataConfigService]
})
export class PublicPageComponent implements OnInit {

  error:boolean;
  content:string;
  code:string;

  constructor(private dataConfigService: DataConfigService) { }

  ngOnInit() {
    console.log("You are in the public Area");
    this.dataConfigService.getPublicContent()
    .subscribe( data =>{
      console.log("CheckLocal Auth: ",data);
      if(data.success){
        this.error=false;
        this.content=data.content;
      }
      else{
        this.error=true;
        this.code=data.status;
        this.content=data.msg;
      }
    })
  }

}
