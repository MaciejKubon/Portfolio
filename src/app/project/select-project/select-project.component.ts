import { Component, EventEmitter, Output } from '@angular/core';
import { projectList } from 'src/app/models/database';
import { ProjectList } from 'src/app/models/interface';

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css'],
})
export class SelectProjectComponent {
  @Output()
  aProject = new EventEmitter<number>();
  constructor() {}
  projectList: ProjectList[] = projectList;
  activeProject: number = 0;
  visMenu: boolean = true;
  visableMenu: string = 'hiddeMenu';

  changeProject(idProject: number) {
    this.projectList.forEach((element) => {
      element.className = 'noActiveProject';
    });
    this.projectList[idProject - 1].className = 'activeProject';
    this.activeProject = idProject - 1;
    this.hiddeMenu();
    this.aProject.emit(this.activeProject);
  }

  changeMenu() {
    if (this.visMenu == true) {
      this.visMenu = false;
      this.visableMenu = 'hiddeMenu';
    } else {
      this.visMenu = true;
      this.visableMenu = 'visableMenu';
    }
  }
  showMenu() {
    this.visableMenu = 'visableMenu';
  }
  hiddeMenu() {
    this.visableMenu = 'hiddeMenu';
  }
}
