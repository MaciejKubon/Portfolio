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
  projectList: ProjectList[] = projectList;
  activeProject: number = 0;
  visMenu: boolean = false;

  changeProject(idProject: number) {
    this.projectList.forEach((element) => {
      element.className = 'noActiveProject';
    });
    this.projectList[idProject - 1].className = 'activeProject';
    this.activeProject = idProject - 1;
    this.visMenu = false;
    this.aProject.emit(this.activeProject);
  }

  changeMenu() {
    if (this.visMenu) this.visMenu = false;
    else this.visMenu = true;
  }
}
