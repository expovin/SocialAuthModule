import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DataConfigService } from '../shared/data-config.service';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [DataConfigService]
})
export class CanvasComponent implements OnInit {

  info;
  errMessage={status:"",text:""};
  error:boolean=false;

  constructor(private dataConfigService: DataConfigService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    // subscribe to router event
    this.activatedRoute.queryParams
    .subscribe((params: Params) => {
      console.log("params:",params);
      let token = params.token;
      console.log("token: ",token);

    });

    this.dataConfigService.chkLocal('token')
    .subscribe( data =>{
      console.log("CheckLocal Auth: ",data);
      if(!data.success){
        this.error=true;
        this.errMessage.status=data.status;
        this.errMessage.text=data.msg;
      }
        
    },
    error =>{
      this.error=true;
      this.errMessage.status=error.status;
      this.errMessage.text=error.statusText;
    })

  }

}
