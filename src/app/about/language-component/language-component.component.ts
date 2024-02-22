import { Component } from '@angular/core';
import { languages } from 'src/app/models/database';
import { Skills } from 'src/app/models/interface';

@Component({
  selector: 'app-language-component',
  templateUrl: './language-component.component.html',
  styleUrls: ['./language-component.component.css'],
})
export class LanguageComponentComponent {
  languages: Skills[] = languages;
}
