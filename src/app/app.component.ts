import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portfolio';
  actualLang: string;

  constructor(private translate: TranslateService) {
    this.actualLang = 'en';
    translate.setDefaultLang('en');
  }
  onChangeLanguage(language: string) {
    this.translate.use(language);
    this.actualLang = language;
  }
}
