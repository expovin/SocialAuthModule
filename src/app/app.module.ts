import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CanvasComponent } from './canvas/canvas.component';
import { DataConfigService } from './shared/data-config.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([])
  ],
  providers: [DataConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
