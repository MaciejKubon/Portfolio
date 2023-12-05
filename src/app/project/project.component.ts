import { Component, HostListener } from '@angular/core';
import { ProjectList } from '../models/interface';
import { projectList } from '../models/database';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  projectList: ProjectList[] = projectList;
  activeProject: number = 0;
  numberActivePhoto: number = 0;
  gallery: string = 'activeProject';
  description: string = 'noActiveProject';
  galleryActive: boolean = true;
  defaultTouch = { x: 0, y: 0, time: 0 };
  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  handleTouch(event: { touches: any[]; changedTouches: any[]; type: string; timeStamp: number; }) {
    let touch = event.touches[0] || event.changedTouches[0];

    // check the events
    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === 'touchend') {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      if (deltaTime < 500) {
        if (Math.abs(deltaX) > 60) {
          if (deltaX > 0) {
            this.nextPhoto(-1);
          } else {
            this.nextPhoto(1);
          }
        }
      }
    }
  }

  aProject(aProj:number){
    this.activeProject=aProj
  }
  changGallery() {
    this.gallery = 'activeProject';
    this.description = 'noActiveProject';
    this.galleryActive = true;
  }
  changDescrtiption() {
    this.description = 'activeProject';
    this.gallery = 'noActiveProject';
    this.galleryActive = false;
  }
  changePhoto(idPhoto: number) {
    this.numberActivePhoto = idPhoto;
  }
  nextPhoto(addPhoto: number) {
    if (addPhoto + this.numberActivePhoto < 0)
      this.numberActivePhoto =
        this.projectList[this.activeProject].photoGallery.length - 1;
    else if (
      this.projectList[this.activeProject].photoGallery.length <=
      addPhoto + this.numberActivePhoto
    )
      this.numberActivePhoto = 0;
    else this.numberActivePhoto = this.numberActivePhoto + addPhoto;
  }
}
