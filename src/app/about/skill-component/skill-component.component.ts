import { Component } from '@angular/core';
import { skills } from 'src/app/models/database';
import { Skills } from 'src/app/models/interface';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css'],
})
export class SkillComponentComponent {
  skills: Skills[] = skills;
}
