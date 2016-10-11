import { Component, ViewEncapsulation } from '@angular/core';
// import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app',
  styles: [require('./app.scss')],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.component.html')
})
export class App {
  // constructor(private translate: TranslateService) {
  //         translate.addLangs(['en-GB', 'cy']);
  //         translate.setDefaultLang('en-GB');

  //         let browserLang = translate.getBrowserLang();
  //         translate.use(browserLang.match(/en-GB|cy/) ? browserLang : 'en-GB');
  // }
}
