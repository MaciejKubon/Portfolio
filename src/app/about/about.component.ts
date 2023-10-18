import { Component } from '@angular/core';
import { Links, language, technology } from '../models/interface';
import { languages, links, skills } from '../models/database';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  links: Links[] = links
  skills:technology[] = skills;
  languages:language[]=languages;
}
