import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { SelectProjectComponent } from './project/select-project/select-project.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from './about/header-component/header-component.component';
import { SkillComponentComponent } from './about/skill-component/skill-component.component';
import { LanguageComponentComponent } from './about/language-component/language-component.component';
import { LinkComponentComponent } from './about/link-component/link-component.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    ProjectComponent,
    AboutComponent,
    SelectProjectComponent,
    HeaderComponentComponent,
    SkillComponentComponent,
    LanguageComponentComponent,
    LinkComponentComponent,
  ],
  imports: [
    BrowserModule,
    [FormsModule],
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
