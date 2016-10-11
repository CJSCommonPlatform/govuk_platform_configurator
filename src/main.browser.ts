import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { TranslateModule, TranslatePipe }  from  '../node_modules/ng2-translate/ng2-translate';
import { App } from './app/app.component';
import { MainComponent } from './app/main/main.component';
import { routes } from './app/app.routes';

import { YourCaseComponent } from './app/+your-case/your-case.component';

import {applicationParams} from './ng-app.config';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App, MainComponent, YourCaseComponent ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(),
    UniversalModule // BrowserModule, HttpModule, and JsonpModule are included
  ]
})
export class MainModule {
}
