import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  imports: [BrowserModule, [FormsModule]],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
