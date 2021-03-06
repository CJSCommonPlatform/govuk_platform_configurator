import { Component } from '@angular/core';
import {TranslateService, TranslatePipe} from '../../../node_modules/ng2-translate/ng2-translate';

@Component({
  selector: 'home',
  templateUrl: 'main.template.html'
})
export class MainComponent{
  constructor(private translate: TranslateService) {
          translate.addLangs(['en-GB', 'cy']);
          translate.setDefaultLang('en-GB');

          let browserLang = translate.getBrowserLang();
          translate.use('en-GB');
          // translate.use(browserLang.match(/en-GB|cy/) ? browserLang : 'en-GB');
          // translate.use('en-GB');
  }
}
