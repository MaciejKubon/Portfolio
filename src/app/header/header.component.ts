import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { NameSection } from '../models/interface';
import { sectionName } from '../models/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() changeLanguage = new EventEmitter<string>();
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    if (window.scrollY < 10) this.headerClass = 'header_top';
    else this.headerClass = 'header_scroll';

    this.changeNavDecoration(window.scrollY);
  }
  EN: string = 'activeLang';
  PL: string = '';
  headerClass: string = 'header_top';
  navClass: string = '';
  navActive: boolean = false;
  sectionName: NameSection[] = sectionName;
  changeLanguageButton(language: string) {
    this.changeLanguage.emit(language);
    if (language == 'pl') {
      this.EN = '';
      this.PL = 'activeLang';
    } else {
      this.EN = 'activeLang';
      this.PL = '';
    }
  }
  changeNavDecoration(position: number) {
    this.sectionName.forEach((el) => {
      if (
        position > this.calculaateHeight(el.id - 1) &&
        position < this.calculaateHeight(el.id)
      ) {
        el.className = 'active';
      } else el.className = 'noActive';
    });
  }
  clickNavbar(selectSection: number) {
    this.sectionName[selectSection - 1].className = 'active';
  }
  calculaateHeight(numberSection: number): number {
    let height: number = 0;
    let element: HTMLElement;

    for (let i: number = 0; i < numberSection; i++) {
      element = document.querySelector(
        `#${this.sectionName[i].name}`
      ) as HTMLElement;
      height += element.clientHeight;
    }
    return height;
  }
  changeMenu() {
    if (!this.navActive) {
      this.navClass = 'visableMenu';
      this.navActive = !this.navActive;
      let element: HTMLElement = document.querySelector(
        `header`
      ) as HTMLElement;
      //element.style.height = '250px';
      this.headerClass = 'header_scroll';
    } else {
      this.navClass = '';
      this.navActive = !this.navActive;
      let element: HTMLElement = document.querySelector(
        `header`
      ) as HTMLElement;
      //element.style.height = '70px';
      this.headerClass = 'header_top';
    }
  }
}
