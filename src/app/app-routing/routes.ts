import { Routes } from '@angular/router';

import { CanvasComponent } from '../canvas/canvas.component';
import { PrivatePageComponent } from '../private-page/private-page.component';
import { PublicPageComponent } from '../public-page/public-page.component';


export const routes: Routes = [
  { path: 'canvas',  component: CanvasComponent },
  { path: 'private',  component: PrivatePageComponent },
  { path: 'public',  component: PublicPageComponent },
  { path: '', redirectTo: 'canvas', pathMatch: 'full' }

];