import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CanvasComponent } from './canvas/canvas.component';
import { DataConfigService } from './shared/data-config.service';
import { LoginComponent } from './login/login.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CanvasComponent,
    LoginComponent,
    PublicPageComponent,
    PrivatePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [DataConfigService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
