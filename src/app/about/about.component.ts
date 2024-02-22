import { Component } from '@angular/core';
import { Header } from '../models/interface';
import { headers } from '../models/database';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  headers: Header[] = headers;
}
