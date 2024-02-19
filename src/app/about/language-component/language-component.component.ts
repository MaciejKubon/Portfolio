import { Component } from '@angular/core';
import { languages } from 'src/app/models/database';
import { language } from 'src/app/models/interface';

@Component({
  selector: 'app-language-component',
  templateUrl: './language-component.component.html',
  styleUrls: ['./language-component.component.css'],
})
export class LanguageComponentComponent {
  languages: language[] = languages;
}
