import {YourCaseComponent} from './app/+your-case/your-case.component';
import {App} from './app/app.component';
import {routes} from './app/app.routes';
import {MainComponent} from './app/main/main.component';
import {applicationParams, applicationOriginalUrl} from './ng-app.config';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UniversalModule} from 'angular2-universal';
import { TranslateModule, TranslatePipe }  from  '../node_modules/ng2-translate/ng2-translate';
// import fromTranslate = require('ng2-translate/');


export function ngApp(req, res) {
  let post = req.body || null;

  console.log('In ngApp post:', post);

  @NgModule({
    bootstrap: [ App ],
    declarations: [ App, MainComponent, YourCaseComponent ],
    providers: [
      {provide: applicationParams, useValue: post},
      {provide: applicationOriginalUrl, useValue: req.originalUrl}
    ],
    imports: [
      FormsModule,
      RouterModule.forRoot(routes),
      TranslateModule.forRoot(),
      UniversalModule // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    ]
  })
  class MainModule {
  }


  res.render('index', {
    req,
    res,
    ngModule: MainModule,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: req.protocol + '://' + req.get('host')
  });
}
