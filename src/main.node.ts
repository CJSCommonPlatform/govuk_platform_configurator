import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { UniversalModule } from 'angular2-universal';

import { App, About } from './app/app.component';
import { Home } from './app/home/home.component';


@NgModule({
  bootstrap: [ App ],
  declarations: [ App, Home, About ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class MainModule {

}
