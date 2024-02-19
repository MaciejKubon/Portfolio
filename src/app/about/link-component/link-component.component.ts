import { Component } from '@angular/core';
import { links } from 'src/app/models/database';
import { Links } from 'src/app/models/interface';

@Component({
  selector: 'app-link-component',
  templateUrl: './link-component.component.html',
  styleUrls: ['./link-component.component.css'],
})
export class LinkComponentComponent {
  links: Links[] = links;
}
