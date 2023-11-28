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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    ProjectComponent,
    AboutComponent,
    SelectProjectComponent,
    
  ],
  imports: [
    BrowserModule,
    [FormsModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
